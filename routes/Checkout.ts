import { Router, Request, Response } from "express";
import CheckoutController from "../controller/Checkout";

const router = Router();
const controller = new CheckoutController();

router.post("/checkout", (req: Request, res: Response) => {
	return controller.check(req, res);
});

export default router;
