import db from "config"
import { adressType } from "interfaces";

export const findUserByToken = async (token: string | string[]) => {
    try {
        const database = await db;
        const user = await database.collection("sessions").findOne({ token });
        console.log(user)
        return user;
    } catch (error) {
        console.log("Error to find user by token: ", error)
    }
};

export const saveUserAdress = async (email, adress: adressType) => {
    try {
        const database = await db;
        await database.collection("adresses").insertOne({ email, ...adress })
    } catch (error) {
        console.log("It's not possible insert adress:", error)
    }
} 