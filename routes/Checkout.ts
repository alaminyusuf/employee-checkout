import { Router, Request, Response } from "express";
import CheckoutController from "../controller/Checkout";

const router = Router();
const controller = new CheckoutController();

router.post("/", async (req: Request, res: Response) => {
	return await controller.authenticate(req, res);
});

router.get("/", (_req: Request, res: Response) => {
	res.render("auth", {
		title: "Employee Checkout",
	});
});

export default router;
