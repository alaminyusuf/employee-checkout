import { Router, Request, Response } from "express";
import CheckoutController from "../controller/Checkout";

const router = Router();
const controller = new CheckoutController();

router.get("/", (_req: Request, res: Response) => {
	return res.render("index", {
		title: "Employee Checkout",
	});
});
router.post("/", async (req: Request, res: Response) => {
	return await controller.check(req, res);
});

export default router;
