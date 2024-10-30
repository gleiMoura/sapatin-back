import { Request, Response } from "express";
import { adressType } from "interfaces";
import { saveAdress } from "services/userService";

export const insertAdress = async (req: Request, res: Response) => {
    const adress: adressType = req.body;
    const { token } = req.headers; //pegar pelo header

    await saveAdress(token, adress);

    res.status(200).send("Successfully saved!")
}