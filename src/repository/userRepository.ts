import config from "config"
import { adressType } from "interfaces";

const { db } = config;

export const findUserByToken = async (token: string | string[]) => {
    try {
        const user = await db.collection("sessions").findOne({ token });
        return user;
    } catch (error) {
        console.log("Error to find user by token: ", error)
    }
};

export const saveUserAdress = async (email, adress: adressType) => {
    try {
        await db.collection("adresses").insertOne({ email, ...adress })
    } catch (error) {
        console.log("It's not possible insert adress:", error)
    }
} 