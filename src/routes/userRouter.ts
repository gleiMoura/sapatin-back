import { Router } from "express";
import schemaValidator from "middlewares/schemaValidator";
import adressSchema from "schemas/adressSchema";
import { getAdress, insertAdress } from "controllers/userController";

const userRouter = Router();

userRouter.post("/user/adress", schemaValidator(adressSchema), insertAdress);
userRouter.get("/user/adress", getAdress);

export default userRouter;