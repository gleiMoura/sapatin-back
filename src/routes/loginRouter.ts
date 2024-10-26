import { Router } from "express";
import { doLogin } from "controllers/loginController";
import loginSchema from "schemas/loginSchema";
import schemaValidator from "middlewares/schemaValidator";

const loginRouter = Router();
loginRouter.post('/login', schemaValidator(loginSchema), doLogin);
