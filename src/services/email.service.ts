//Importo Librerias a utilizar
import { config } from "../config/config";
import { createTransport } from "nodemailer";
import { logger } from "../config/logs.config";

export const transporter = createTransport({
    host: config.HOST,
    port: 587,
    auth: {
        user: config.EMAIL,
        pass: config.PASSWORD
    }
})

export const sendMailEthereal = async (subject: string, message: string) =>{
    try{
        await transporter.sendMail({
            from: config.EMAIL,
            to: config.EMAIL,
            subject,
            text: message
        })
    }catch(error){
        logger.error(error)
    }
}