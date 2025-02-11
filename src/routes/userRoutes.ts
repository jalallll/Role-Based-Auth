import { Request, Response, Router } from "express";
import * as AuthMiddleware from "../middleware/authMiddleware";
import { verifyRoleAuthorization } from "../middleware/roleMiddleware";

const userRouter = Router();

userRouter.use(AuthMiddleware.verifyToken);

userRouter.get(
    "/admin",
    verifyRoleAuthorization("admin", "manager"),
    (req: Request, res: Response) => {
        res.send("admin route");
    }
);
userRouter.get(
    "/manager",
    verifyRoleAuthorization("manager"),
    (req: Request, res: Response) => {
        res.send("manager route");
    }
);
userRouter.get(
    "/user",
    verifyRoleAuthorization("user"),
    (req: Request, res: Response) => {
        res.send("user route");
    }
);

export default userRouter;
