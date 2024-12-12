import express from "express";
import session from "express-session";
import path from "path";
import "./db";

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
		secret: process.env.SESSION_KEY,
	})
);
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "pug");

app.use("/", IndexRoute);
app.use("/api", employeeRoute);
app.use("/api/checkout", checkoutRoute);

app.listen(3001, () => console.log("App running on port 3001"));
