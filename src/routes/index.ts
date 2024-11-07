import Router from "express";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";
import userRouter from "./userRouter";
import productsRouter from "./productsRouter";

const router = Router();
router.use(loginRouter);
router.use(registerRouter);
router.use(userRouter);
router.use(productsRouter)

export default router;