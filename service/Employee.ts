import Employee from "../model/Employee";
import { IEmployee } from "../interface";
import { fieldValidation } from "../util/validation";
import * as argon2 from "argon2";
import { AppError } from "../util/AppError";

/**
 * Service class for employee-related operations.
 */
class EmployeeService {
	/**
	 * Creates a new employee.
	 * @param data Request body containing employee details.
	 * @returns The created employee document.
	 * @throws AppError if validation fails or email already exists.
	 */
	async create(data: IEmployee) {
		const err = fieldValidation(data);
		if (err) {
			throw new AppError(err.message, 400);
		}

		const { name, email, password, level, dept } = data;
		const hashed = await argon2.hash(password);
		const Idata: IEmployee = {
			name,
			email,
			password: hashed,
			dept,
			level,
		};
		const found = await Employee.findOne({ email: data.email });

		if (found) {
			throw new AppError("That email already exists", 400);
		}
		const employee = await Employee.create(Idata);
		return employee;
	}

	/**
	 * Looks up an employee by email.
	 * @param email Employee email.
	 * @returns The employee document.
	 * @throws AppError if employee not found.
	 */
	async lookupEmployee(email: string) {
		const employee = await Employee.findOne({ email });
		if (!employee) {
			throw new AppError("Could not find employee with the provided email", 404);
		}
		return employee;
	}

	/**
	 * Updates an employee's details.
	 * @param id Employee ID.
	 * @param data Data to update.
	 * @returns Message indicating success.
	 * @throws AppError if update fails.
	 */
	async updateEmployee(id: string, data: any) {
		const response = await Employee.findByIdAndUpdate({ _id: id }, data);
		if (!response) {
			throw new AppError("Could not update: Employee not found", 404);
		}
		return { msg: "Employee updated" };
	}

	/**
	 * Deletes an employee.
	 * @param id Employee ID.
	 * @returns Message indicating success.
	 * @throws AppError if deletion fails.
	 */
	async deleteEmployee(id: string) {
		const deleted = await Employee.findByIdAndDelete(id);
		if (!deleted) {
			throw new AppError("User not found", 404);
		}
		return { msg: "User deleted" };
	}

	/**
	 * Retrieves all employees.
	 * @returns List of all employees.
	 */
	async getAllEmployees() {
		const employees = await Employee.find();
		return employees;
	}

	/**
	 * Retrieves a single employee by ID.
	 * @param id Employee ID.
	 * @returns The employee document.
	 * @throws AppError if employee not found.
	 */
	async getSingleEmployee(id: string) {
		const employee = await Employee.findById(id);
		if (!employee) {
			throw new AppError("Employee not found", 404);
		}
		return employee;
	}
}

export default EmployeeService;
