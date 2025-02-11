const mongoose = require("mongoose");

const getConnectionUri = (): string => {
    const { MONGO_USER_NAME, MONGO_PASSWORD, MONGO_URI } = process.env;

    if (!MONGO_URI) {
        throw new Error("Mongo URI is not defined");
    } else if (!MONGO_USER_NAME) {
        throw new Error("Mongo User is not defined");
    } else if (!MONGO_PASSWORD) {
        throw new Error("Mongo Password is not defined");
    }

    return MONGO_URI.replace("<username>", MONGO_USER_NAME).replace(
        "<password>",
        MONGO_PASSWORD
    );
};

export const connectDB = async (): Promise<void> => {
    try {
        const connection = await mongoose.connect(getConnectionUri(), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.info(
            "MongoDB connected successfully ",
            connection.connection.host
        );
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
