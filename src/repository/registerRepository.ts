import db from "config"
import { registerType } from "interfaces";

export const logUserInDb = async (credentials: registerType) => {
    try {
        const database = await db;
        await database.collection('users').insertOne(credentials)
    } catch (error) {
        console.log("Error trying log user in db", error);
    }
};