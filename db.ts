import mongoose from "mongoose";

// Using local server, will change after project completion #Top priority
const mongoDB = "mongodb://127.0.0.1/_checkout-sever";

mongoose.connect(mongoDB);
const conn = mongoose.connection;
conn.on("connected", () => console.log("DB connected!"));
