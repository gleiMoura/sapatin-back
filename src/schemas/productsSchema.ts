
import { productType } from "interfaces";
import joi, { ObjectSchema } from "joi";

const productsSchema: ObjectSchema<productType> = joi.object({
    id: joi.string().required(),
    price: joi.number().required(),
    brand: joi.string().required(),
    name: joi.string().required(),
    sizes: joi.array().required(),

});

export default productsSchema;
