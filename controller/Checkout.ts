import { Request, Response } from "express";
import CheckoutService from "../service/Checkout";

const service = new CheckoutService();

/**
 * Controller for handling employee checkout and authentication requests.
 */
class CheckoutController {
	/**
	 * Handles the initial department access check.
	 */
	async check(req: Request, res: Response) {
		const { email, dept } = req.body;
		const { name } = await service.check(email, dept);

		req.session.user = { email, verified: false, name };
		return res.redirect(`/api/checkout`);
	}

	/**
	 * Handles the password authentication for the checkout.
	 */
	async authenticate(req: Request, res: Response) {
		if (!req.session.user) {
			return res.redirect("/");
		}
		const { password } = req.body;
		const email = req.session.user.email;
		await service.athenticate(email, password);

		req.session.user.verified = true;
		const name = req.session.user.name;
		res.setHeader("Content-Type", "text/html");
		res.write(`<h2>Hello ${name}</h2>`);
		return res.end();
	}
}

export default CheckoutController;
