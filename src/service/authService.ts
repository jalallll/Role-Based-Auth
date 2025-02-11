import {
    LoginWithEmailInput,
    LoginWithUsernameInput,
    RegisterInput,
} from "../types/authType";
import User from "../models/User";

import { generateToken } from "../utils/jwtUtils";
import { hashPassword, comparePasswordWithHash } from "../utils/bcryptUtils";

class AuthService {
    static async register(registerInput: RegisterInput) {
        try {
            const { userName, email, password, role } = registerInput;
            const hashedPassword = await hashPassword(password);

            const user = new User({
                userName,
                email,
                password: hashedPassword,
                role,
            });

            await user.save();
            const token = generateToken(user._id, user.role);
            return token;
        } catch (error) {
            console.error("Error while registering user", error);
            throw error;
        }
    }

    static async loginWithEmail(loginWithEmailInput: LoginWithEmailInput) {
        try {
            const { email, password } = loginWithEmailInput;
            const user = await User.findOne({ email });
            const correctPasswordSupplied = await comparePasswordWithHash(
                password,
                user.password
            );

            if (!correctPasswordSupplied) {
                throw new Error("Invalid password");
            }

            const token = generateToken(user._id, user.role);
            return token;
        } catch (error) {
            console.error("Error while logging in user", error);
            throw error;
        }
    }

    static async loginWithUsername(
        loginWithUsernameInput: LoginWithUsernameInput
    ) {
        try {
            const { userName, password } = loginWithUsernameInput;
            const user = await User.findOne({ userName });
            const correctPasswordSupplied = await comparePasswordWithHash(
                password,
                user.password
            );

            if (!correctPasswordSupplied) {
                throw new Error("Invalid password");
            }

            const token = generateToken(user._id, user.role);
            return token;
        } catch (error) {
            console.error("Error while logging in user", error);
            throw error;
        }
    }
}

export default AuthService;
