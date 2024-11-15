import { adressType } from "interfaces";
import joi, { ObjectSchema } from "joi";

const adressSchema: ObjectSchema<adressType> = joi.object({
    city: joi.string().required(),
    state: joi.string().required(),
    street: joi.string().required(),
    number: joi.number().required(),
    cep: joi.string().pattern(/^\d{5}-\d{3}$/).required(),
    more: joi.string()
});

export default adressSchema;
