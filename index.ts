import express, { Request, Response } from "express";
import "./db";
import employeeRoute from "./routes/Employee";

const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
	res.send("Hi");
});
app.use("/api", employeeRoute);

app.listen(3001, () => console.log("App running on port 3001"));
