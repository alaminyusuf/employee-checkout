import { Request, Response } from "express";
import CheckoutService from "../service/Checkout";

const service = new CheckoutService();

class CheckoutController {
	async check(req: Request, res: Response) {
		const { email, dept } = req.body;
		const { code, name } = await service.check(email, dept);
		if (code == 200) {
			req.session.user = { email, verified: false, name };
			res.redirect(`/api/checkout`);
		} else if (code == 401) {
			res.statusCode = 401;
			res.redirect("/");
		} else {
			res.statusCode = 403;
			res.redirect("/");
		}
	}
	async authenticate(req: Request, res: Response) {
		if (!req.session.user) {
			res.redirect("/");
		}
		const { password } = req.body;
		let email = req.session.user.email;
		const { code } = await service.athenticate(email, password);
		if (code == 400) {
			res.redirect(`/`);
		} else {
			req.session.user.verified = true;
			const name = req.session.user.name;
			res.setHeader("Content-Type", "text/html");
			res.write(`<h2>Hello ${name}</h2>`);
			res.end();
		}
	}
}

export default CheckoutController;
