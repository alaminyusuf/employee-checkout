import express from "express";
import session from "express-session";
import path from "path";
import "./db";
import logger from "./util/logger";
import { errorHandler } from "./middleware/errorHandler";

declare module "express-session" {
	export interface SessionData {
		user: { email: string; verified: boolean; name: string };
	}
}

import employeeRoute from "./routes/Employee";
import checkoutRoute from "./routes/Checkout";
import IndexRoute from "./routes/index";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: process.env.SESSION_KEY || "default-secret-key-change-me",
	})
);
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "pug");

// Routes
app.use("/", IndexRoute);
app.use("/api", employeeRoute);
app.use("/api/checkout", checkoutRoute);

// Error handling middleware
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => logger.info(`App running on port ${PORT}`));
