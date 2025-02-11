import { Router } from "express";
import {
    register,
    loginWithEmail,
    loginWithUsername,
} from "../controller/authController";

console.log("\n\n auth router");
const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/loginWithEmail", loginWithEmail);
authRouter.post("/loginWithUsername", loginWithUsername);

export default authRouter;
