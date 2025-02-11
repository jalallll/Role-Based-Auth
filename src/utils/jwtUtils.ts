import jwt from "jsonwebtoken";

export const generateToken = (userId: any, role: string) => {
    return jwt.sign({ userId, role }, process.env.JWT_SECRET!);
};

export const decodeToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET!);
};
