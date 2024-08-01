import { Request, Response } from "express";
import CheckoutService from "../service/Checkout";

const service = new CheckoutService();

class CheckoutController {
	async check(req: Request, res: Response) {
		const { email, dept } = req.body;
		const response = await service.check(email, dept);
		return res.status(response.code).json({
			code: response.code,
			response: response.response,
		});
	}
}

export default CheckoutController;
