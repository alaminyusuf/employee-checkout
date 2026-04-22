import * as argon2 from "argon2";
import Employee from "../model/Employee";
import { AppError } from "../util/AppError";

/**
 * Service class for handling employee checkout and authentication.
 */
class CheckoutService {
	/**
	 * Checks if an employee exists and belongs to the specified department.
	 * @param email Employee email.
	 * @param dept Department name.
	 * @returns Object containing employee name and success status.
	 * @throws AppError if employee not found or department mismatch.
	 */
	async check(email: string, dept: string) {
		const employee = await Employee.findOne({ email });
		if (!employee) {
			throw new AppError("Invalid email", 401);
		}
		if (employee.dept !== dept.toUpperCase()) {
			throw new AppError("You do not have access to this department", 403);
		}
		return {
			name: employee.name,
			success: true,
		};
	}

	/**
	 * Authenticates an employee with their password.
	 * @param email Employee email.
	 * @param password Employee password.
	 * @returns Object indicating success status.
	 * @throws AppError if password verification fails.
	 */
	async athenticate(email: string, password: string) {
		const employee = await Employee.findOne({ email });
		if (!employee) {
			throw new AppError("Invalid email or password", 401);
		}
		const verified = await argon2.verify(employee.password, password);
		if (!verified) {
			throw new AppError("Invalid email or password", 401);
		}
		return {
			success: true,
		};
	}
}

export default CheckoutService;
