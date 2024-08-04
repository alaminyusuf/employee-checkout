import mongoose from "mongoose";
import "dotenv/config";

const mongoDB = process.env.MONGO_URI;

mongoose.connect(mongoDB);
const conn = mongoose.connection;
conn.on("connected", () => console.log("DB connected!"));
