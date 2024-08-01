import Employee from "../model/Employee";

class CheckoutService {
	async check(email: string, dept: string) {
		const employee = await Employee.findOne({ email });
		if (!employee) {
			return {
				code: 401,
				response: "UnAuthorized",
			};
		}
		if (employee.dept !== dept) {
			return {
				code: 403,
				response: "Invalid department",
			};
		}
		return {
			code: 200,
			response: `Welcome ${employee.name} to ${employee.dept}`,
		};
	}
}

export default CheckoutService;
