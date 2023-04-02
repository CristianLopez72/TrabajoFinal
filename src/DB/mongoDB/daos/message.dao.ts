//Importo Librerias a utilizar
import { logger } from "../../../config/logs.config";
import { MessagesModel } from "../schema/messages.schema";
import { MessagesType } from "../../../utils/globals.interfaces";

class MessageDAO {
    constructor(){}

    async createMessage(data: MessagesType) {
        try{
            return await MessagesModel.create(data)
        }catch(error){
            logger.error(error)
        }
    }
    async getAllMessages(){
        try{
            return await MessagesModel.find()
        }catch(error){
            logger.error(error)
        }
    }
    async getEmailMessage(email: string){
        try{
            return await MessagesModel.find({email: email})
        }catch(error){
            logger.error(error)
        }
    }
}

export const messageDao = new MessageDAO()