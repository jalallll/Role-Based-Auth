import { Request, Response, NextFunction } from "express";
import * as JwtUtils from "../utils/jwtUtils";
import AuthUtils from "../utils/authUtils";

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = AuthUtils.verifyAuthHeaderFields(req.headers);
        const decodedToken = JwtUtils.decodeToken(token);
        req.body.user = decodedToken;
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
