import { loginType } from "interfaces";
import { findUser, startSession } from "repository/signRepository";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";


const signinUser = async (credentials: loginType) => {
    const { email, password } = credentials;

    const user = await findUser(email);
    const confirmPassword = bcrypt.compareSync(password, user.password);


    if (!user || !confirmPassword) {
        throw {
            response: {
                status: 404
            }
        }
    };

    try {
        const userId = user._id;
        const token = uuid();
        await startSession(userId, token);
        delete user.password;
    } catch (error) {
        console.error("Erro no servidor, " + error);
    }
};

export default signinUser;