import { Router } from "express";
import { validateLogin } from "middlewares/loginMiddleware";

const loginRouter = Router();
loginRouter.post('/login', validateLogin, doLogin)