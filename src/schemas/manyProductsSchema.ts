import joi from "joi";
import productsSchema from "./productsSchema";

const manyProductsSchema = joi.array().items(productsSchema).required();

export default manyProductsSchema;