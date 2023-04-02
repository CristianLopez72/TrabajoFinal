//Importo Librerias a utilizar
import { auth, isLoggedIn, sessionExist } from "../middleware/auth.middleware";
import { createProduct, DeleteProduct, getAllProducts, getProductsByID, upgradeProduct } from "../controllers/product.controller";
import { Router } from "express";

const productsRouter = Router()

productsRouter.get('/', getAllProducts)
productsRouter.get('/:id', getProductsByID)
productsRouter.post('/', isLoggedIn, auth, createProduct)
productsRouter.put('/:id', isLoggedIn, auth, upgradeProduct)
productsRouter.delete('/:id',isLoggedIn, auth,  DeleteProduct)

export default productsRouter