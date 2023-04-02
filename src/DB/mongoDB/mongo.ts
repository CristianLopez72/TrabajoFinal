//Importo Librerias a utilizar
import { config } from "../../config/config";
import { logger } from "../../config/logs.config";
import mongoose from "mongoose";

const connectionString: string  = config.URI || 'mongodb://127.0.0.1:27017/TPFinalCoder'

export const initMongoDb = async() =>{
    try{
        logger.info('Conectando a la base de Datos...')
        await mongoose.connect(connectionString, { dbName: config.DB})
        logger.info('Conectado a la base de datos')
    }catch(error){
        logger.error(error)
    }
}