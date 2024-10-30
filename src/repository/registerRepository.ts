import db from "config"
import { registerType } from "interfaces";

export const logUserInDb = async (credentials: registerType) => {
    try {
        await db.collection('users').insertOne(credentials)
    } catch (error) {
        console.log("Error trying log user in db", error);
    }
};