import { Request, Response } from "express";
import AuthService from "../service/authService";
import AuthUtils from "../utils/authUtils";

export const register = async (request: Request, response: Response) => {
    console.log("\n\n authController", request.body);
    const registerInput = AuthUtils.verifyRegistrationFields(request.body);

    let token: string;
    try {
        token = await AuthService.register(registerInput);
        response.status(200).json({ token });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

export const loginWithEmail = async (request: Request, response: Response) => {
    const loginWithEmailInput = AuthUtils.verifyLoginWithEmailFields(
        request.body
    );

    let token: string;
    try {
        token = await AuthService.loginWithEmail(loginWithEmailInput);
        response.status(200).json({ token });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

export const loginWithUsername = async (
    request: Request,
    response: Response
) => {
    const loginWithUsernameInput = AuthUtils.verifyLoginWithUsernameFields(
        request.body
    );

    let token: string;
    try {
        token = await AuthService.loginWithUsername(loginWithUsernameInput);
        response.status(200).json({ token });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};
