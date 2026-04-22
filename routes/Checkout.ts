import { Router, Request, Response } from "express";
import CheckoutController from "../controller/Checkout";
import { catchAsync } from "../util/catchAsync";

const router = Router();
const controller = new CheckoutController();

/**
 * @route POST /api/checkout
 * @desc Authenticate employee password
 */
router.post("/", catchAsync(controller.authenticate));

/**
 * @route GET /api/checkout
 * @desc Render checkout authentication page
 */
router.get("/", (_req: Request, res: Response) => {
	res.render("auth", {
		title: "Employee Checkout",
	});
});

export default router;
