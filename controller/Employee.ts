import { Request, Response } from "express";
import EmployeeService from "../service/Employee";

const service = new EmployeeService();

/**
 * Controller for handling employee-related requests.
 */
class EmployeeController {
	/**
	 * Creates a new employee.
	 */
	async create(req: Request, res: Response) {
		const employee = await service.create(req.body);
		return res.status(201).json({
			status: "success",
			data: { employee },
		});
	}

	/**
	 * Retrieves all employees.
	 */
	async getAllEmployees(_req: Request, res: Response) {
		const employees = await service.getAllEmployees();
		return res.status(200).json({
			status: "success",
			results: employees.length,
			data: { employees },
		});
	}

	/**
	 * Updates an employee's details.
	 */
	async updateEmployee(req: Request, res: Response) {
		const response = await service.updateEmployee(req.body.id, req.body);
		return res.status(200).json({
			status: "success",
			message: response.msg,
		});
	}

	/**
	 * Deletes an employee.
	 */
	async deleteEmployee(req: Request, res: Response) {
		await service.deleteEmployee(req.body.id);
		return res.status(204).json({
			status: "success",
			data: null,
		});
	}
}

export default EmployeeController;
