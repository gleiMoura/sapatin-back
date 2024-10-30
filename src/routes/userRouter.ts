import { Router } from "express";
import schemaValidator from "middlewares/schemaValidator";
import adressSchema from "schemas/adressSchema";
import { insertAdress } from "controllers/userController";

const userRouter = Router();

userRouter.post("/user/adress", schemaValidator(adressSchema), insertAdress);

export default userRouter;