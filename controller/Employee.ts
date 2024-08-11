import { Request, Response } from "express";
import { IEmployee } from "../interface";
import EmployeeService from "../service/Employee";
import { fieldValidation } from "../util/validation";
import * as argon2 from "argon2";

const service = new EmployeeService();

class EmployeeController {
	async create(req: Request, res: Response) {
		const { name, email, password, level, dept } = req.body;
		const hashed = await argon2.hash(password);
		const data: IEmployee = {
			name,
			email,
			password: hashed,
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
		const response = await service.updateEmployee(req.body.id, req.body);
		return res.status(201).json({
			code: response.code,
			response: response.response.msg,
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
