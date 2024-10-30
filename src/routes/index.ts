import Router from "express";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";
import userRouter from "./userRouter";

const router = Router();
router.use(loginRouter);
router.use(registerRouter);
router.use(userRouter);

export default router;