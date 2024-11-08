import { adressType } from "interfaces";
import { findUserByToken } from "repository/userRepository";
import { saveUserAdress } from "repository/userRepository";

export const saveAdress = async (token: string | string[], adress: adressType) => {
    const user = await findUserByToken(token);

    if (!user) {
        throw {
            response: {
                status: 404,
                message: "User is not logged"
            }
        }
    };

    await saveUserAdress(user.email, adress);
};