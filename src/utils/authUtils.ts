import {
    LoginWithEmailInput,
    LoginWithUsernameInput,
    RegisterInput,
} from "./../types/authType";

class AuthUtils {
    private static veryifyFields(requestBody: any, requiredFields: any) {
        for (const field of requiredFields) {
            if (!requestBody[field]) {
                throw new Error(`Missing required field: ${field}`);
            }

            // Optional: Type checking (ensure correct data types)
            if (typeof requestBody[field] !== "string") {
                throw new Error(
                    `Invalid type for field: ${field}. Expected string.`
                );
            }
        }
    }

    static verifyRegistrationFields(requestBody: any): RegisterInput {
        console.log("\nrequestBody", requestBody);
        const requiredFields = Object.keys({} as RegisterInput);
        this.veryifyFields(requestBody, requiredFields);

        return requestBody as RegisterInput;
    }

    static verifyLoginWithEmailFields(requestBody: any): LoginWithEmailInput {
        const requiredFields = Object.keys({} as LoginWithEmailInput);
        this.veryifyFields(requestBody, requiredFields);

        return requestBody as LoginWithEmailInput;
    }

    static verifyLoginWithUsernameFields(
        requestBody: any
    ): LoginWithUsernameInput {
        const requiredFields = Object.keys({} as LoginWithUsernameInput);
        this.veryifyFields(requestBody, requiredFields);

        return requestBody as LoginWithUsernameInput;
    }

    static verifyAuthHeaderFields(requestHeaders: any) {
        const authHeader =
            requestHeaders.authorization || requestHeaders.Authorization;
        if (!authHeader) {
            throw new Error("Missing Authorization header");
        }

        if (!authHeader.startsWith("Bearer ")) {
            throw new Error("Invalid Authorization header");
        }

        return authHeader.split("Bearer ")[1];
    }
}

export default AuthUtils;
