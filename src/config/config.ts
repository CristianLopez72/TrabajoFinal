//Importo Librerias a utilizar
import { Config } from '../utils/globals.interfaces'
import * as dotenv from 'dotenv'

dotenv.config()

    export const config: Config = {
        PORT: process.env.PORT || 8080,
        URI: process.env.MONGO_ATLAS_URI || 'mongodb://127.0.0.1:27017/TPFinalCoder',
        DB: process.env.MONGO_ATLAS_DB_NAME,
        SECRET: process.env.SECRET_STRING,
        CRYPTO_SECRET: process.env.CRYPTO_SECRET,
        HOST: process.env.HOST,
        PORT_ETHEREAL: process.env.ETHEREAL_PORT,
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD,
        SID: process.env.SID,
        TOKEN: process.env.TOKEN,
        PHONE: process.env.PHONE,
        PHONE_WPP: process.env.PHONE_WPP,
    }

