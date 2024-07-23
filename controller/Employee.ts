import { Request, Response } from "express";
import { IEmployee } from "../interface";
import EmployeeService from "../service/Employee";
import { fieldValidation } from "../util/validation";

const service = new EmployeeService();

class EmployeeController {
	async create(req: Request, res: Response) {
		const { name, email, password, level, dept } = req.body;
		const data: IEmployee = {
			name,
			email,
			password,
			dept,
			level,
		};
		const err = fieldValidation(data);
		if (err) {
			return res.status(400).json({ err });
		}
		const response = await service.create(data);
		return res.status(201).json({ response });
	}

	async getAllEmployees(_req: Request, res: Response) {
		let employees = await service.getAllEmployees();
		return res.status(200).json({
			code: 200,
			response: employees.response,
		});
	}

	async updateEmployee(req: Request, res: Response) {
		const { name, email, level, password, dept } = req.body;
		const employee = await service.getSingleEmployee(req.body.id);
		if (typeof name !== undefined) {
			await service.updateEmployee(req.body.id, {
				name,
			});
		}
		if (typeof email !== undefined) {
			await service.updateEmployee(req.body.id, {
				email,
			});
		}
		if (typeof level !== undefined) {
			await service.updateEmployee(req.body.id, {
				level,
			});
		}
		if (typeof dept !== undefined) {
			await service.updateEmployee(req.body.id, {
				dept,
			});
		}
		if (typeof password !== undefined) {
			await service.updateEmployee(req.body.id, {
				password,
			});
		}
		return res.status(201).json({
			code: 201,
			response: employee,
		});
	}

	async deleteEmployee(req: Request, res: Response) {
		const deleted = await service.deleteEmployee(req.body.id);
		if (!deleted) {
			return res.status(400).json({
				code: 400,
				response: deleted.response.msg,
			});
		}
		return res.status(201).json({
			code: 201,
			response: deleted.response.msg,
		});
	}
}

export default EmployeeController;
