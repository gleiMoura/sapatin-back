import { Router } from "express";
import { validateLogin } from "middlewares/loginMiddleware";
import { doLogin } from "controllers/loginController";

const loginRouter = Router();
loginRouter.post('/login', validateLogin, doLogin)