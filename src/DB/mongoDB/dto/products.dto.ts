//Importo Librerias a utilizar
import { DtoClass } from "../../../utils/globals.interfaces";
import { ObjectId } from "mongoose";

class ProductsDTO implements DtoClass{
    _id: ObjectId
    name: string
    code: number
    description: string
    price: number

    constructor(data: any){
        this._id = data._id
        this.name = data.name
        this.code = data.code
        this.description = data.description
        this.price = data.price
    }
}

export const productsDto = (data:any) =>{
    if(Array.isArray(data)){
        return data.map(product => new ProductsDTO(product))
    }else{
        return new ProductsDTO(data)
    }
}


   
