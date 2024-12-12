import * as argon2 from "argon2";
import Employee from "../model/Employee";

class CheckoutService {
	async check(email: string, dept: string) {
		const employee = await Employee.findOne({ email });
		if (!employee) {
			return {
				code: 401,
			};
		}
		if (employee.dept !== dept.toUpperCase()) {
			return {
				code: 403,
			};
		}
		return {
			name: employee.name,
			code: 200,
		};
	}
	async athenticate(email: string, password: string) {
		const employee = await Employee.findOne({ email });
		const verified = await argon2.verify(employee.password, password);
		if (!verified) {
			return {
				code: 400,
			};
		}
		return {
			code: 200,
		};
	}
}

export default CheckoutService;
