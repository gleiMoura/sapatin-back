import db from "config"

const findUser = async (email: string) => {
    try {
        const database = await db;
        const user = await database.collection('users').findOne({ email });

        return user;
    } catch (error) {
        console.log(error)
    }
};

const startSession = async (userId, token) => {
    try {
        const database = await db;
        await database.collection("sessions").insertOne({
            userId, token
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    findUser,
    startSession
}