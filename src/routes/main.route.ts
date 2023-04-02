//Importo Librerias a utilizar
import cartRouter from "./cart.route";
import { getAllMessages, getMessageByEmail } from "../controllers/message.controller";
import { isLoggedIn, sessionExist } from "../middleware/auth.middleware";
import { login, logout, signUp, uploadThumbnail } from "../controllers/user.controller";
import multer from "multer";
import passport from "passport";import productsRouter from "./products.route";
import { Router } from "express";

const upload = multer({dest: './uploads'})
const mainRouter: Router = Router()

const badRequestMessage= "Por favor ingrese el email y el password"

mainRouter.use('/productos', productsRouter)
mainRouter.use('/carrito', cartRouter)
mainRouter.post('/login',sessionExist, passport.authenticate('login', { failureMessage: badRequestMessage}), login)
mainRouter.get('/logout', logout)
mainRouter.post('/signup', signUp)
mainRouter.post('/profile', upload.single('imagen'), uploadThumbnail)
mainRouter.get('/chat', getAllMessages)
mainRouter.get('/chat/:email', getMessageByEmail)

export default mainRouter