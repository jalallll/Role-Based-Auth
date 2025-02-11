import { Request, Response, NextFunction } from "express";

export const verifyRoleAuthorization = (...allowedRoles) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.body.role;
        if (allowedRoles.includes(userRole)) {
            next();
        }
        res.status(401).json({
            message: "Unauthorized",
        });
    };
};
