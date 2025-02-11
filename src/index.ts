import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/mongooseConfig";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, from express app");
});

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});
