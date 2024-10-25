import { Request, Response, NextFunction } from "express"
import { loginType } from "interfaces";
import loginSchema from "schemas/loginSchema";
import chalk from "chalk";

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const credentials: loginType = req.body;

        const validation = loginSchema.validate(credentials);

        if (validation.error) {
            console.log(chalk.red(validation.error.details));
            return res.sendStatus(422);
        }
    } catch (error) {
        console.log(chalk.red("Algo deu errado em midleware/validateProduct: " + error));
        return res.sendStatus(500);
    }

    next()
} 