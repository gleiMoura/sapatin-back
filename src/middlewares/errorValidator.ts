import { Request, Response, NextFunction } from "express";

async function errorHandler(error, req: Request, res: Response, next: NextFunction) {
    if (error.response) {
        res.status(error.response.status).send(error.response.message);
    } else {
        res.status(500).send("Error in API!")
    }
};

export default errorHandler;