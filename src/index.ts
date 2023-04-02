//Importo Librerias a utilizar
import { config } from './config/config'
import { initMongoDb } from './DB/mongoDB/mongo'
import initWsServer from './services/socket.service'
import { logger } from './config/logs.config'
import server from './services/server.service'

const init = async () =>{
    try{
        await initMongoDb()
        initWsServer(server)
        server.listen(config.PORT, ():void =>{
            logger.info(`Servidor escuchando en el puerto ${config.PORT}`)
        })
    }catch(error){
        logger.error(error);
        
    }
}
init()