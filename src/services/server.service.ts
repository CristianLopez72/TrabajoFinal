//Importo Librerias a utilizar
import cookieParser from "cookie-parser";
import { config } from "../config/config";
import cors from 'cors'
import { Error } from "../utils/globals.interfaces";
import express, { Request, Response, NextFunction} from "express";
import http from 'http'
import { info } from '../docs/info'
import { loginFunc, signUpFunc } from "./auth.service";
import mainRouter from "../routes/main.route";
import MongoStore from "connect-mongo";
import passport from "passport";
import path from "path";
import session from "express-session";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express'

const app = express()
const server = http.createServer(app)

const specs = swaggerJSDoc(info)

const viewsPath = path.resolve(__dirname, '../../views')
const publicPath = path.resolve(__dirname,'../../public')

interface SessionInfo {
    loggedIn: boolean;
    username : string;
    admin : boolean;
}

declare module 'express-session' {
    interface SessionData {
        info: SessionInfo,
        passport: {[key: string]: any}
    }
}

const ttl_seconds = 180

app.use(session({
    store: MongoStore.create({
        mongoUrl: config.URI,
        dbName: config.DB,
        crypto: {
            secret: config.CRYPTO_SECRET || false
        },
    }),
    secret: config.SECRET || [],
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: ttl_seconds * 1000
    }
}))

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())
passport.use("login", loginFunc)
passport.use("signup", signUpFunc)
app.use('/api', mainRouter)
app.set("view engine", "pug")
app.set("views", viewsPath)
app.use(express.static(publicPath))

app.use((req:Request, res:Response, next:NextFunction) => {
    res.status(404).json({
        msg:'Lo siento, página no encontrada'
    })
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) =>{
    const status = error.status || 500
    const message = error.message || 'Error interno en el Servidor'
    res.status(status).json({
        message
    })
})

export default server