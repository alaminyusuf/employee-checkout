import { Router, Request, Response } from "express";
import CheckoutController from "../controller/Checkout";
import { catchAsync } from "../util/catchAsync";

const router = Router();
const controller = new CheckoutController();

/**
 * @route GET /
 * @desc Render home page
 */
router.get("/", (_req: Request, res: Response) => {
	return res.render("index", {
		title: "Employee Checkout",
	});
});

/**
 * @route POST /
 * @desc Initial department access check
 */
router.post("/", catchAsync(controller.check));

export default router;
