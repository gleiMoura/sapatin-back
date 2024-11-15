import { Request, Response } from "express";
import { adressType } from "interfaces";
import { getUserAdress, saveAdress } from "services/userService";

export const insertAdress = async (req: Request, res: Response) => {
    const adress: adressType = req.body;
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).send("Token is missing or invalid!")
    }

    await saveAdress(token, adress);

    res.status(200).send(adress)
};

export const getAdress = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).send("Token is missing or invalid!")
    }

    const adress = await getUserAdress(token);

    res.status(200).send(adress);
}
