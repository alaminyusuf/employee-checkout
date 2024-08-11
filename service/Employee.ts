import Employee from "../model/Employee";
import { IEmployee } from "../interface";

class EmployeeService {
	async create(data: IEmployee) {
		const found = await Employee.findOne({ email: data.email });

		if (found) {
			return {
				error: 400,
				response: { msg: "That email already exist" },
			};
		}
		const employee = await Employee.create(data);
		return {
			code: 201,
			response: employee,
		};
	}

	async lookupEmployee(email: string) {
		const employee = await Employee.findOne({ email });
		if (employee) {
			return {
				code: 200,
				response: employee,
			};
		}
		return {
			code: true,
			response: { msg: "Could not find employee with the provided email" },
		};
	}

	async updateEmployee(id: string, data: any) {
		const response = await Employee.findByIdAndUpdate({ _id: id }, data);
		if (response) {
			return {
				code: 201,
				response: { msg: "Employee updated" },
			};
		}
		return {
			code: 400,
			response: { msg: "Could not update" },
		};
	}

	async deleteEmployee(id: string) {
		const deleted = await Employee.findByIdAndDelete(id);
		if (!deleted) {
			return {
				code: 400,
				response: { msg: "User not found" },
			};
		}
		return {
			code: 201,
			response: { msg: "User deleted" },
		};
	}

	async getAllEmployees() {
		const employees = await Employee.find();
		return {
			code: 200,
			response: employees,
		};
	}

	async getSingleEmployee(id: string) {
		const employee = await Employee.findById(id);
		if (!employee) {
			return {
				code: 400,
				response: { msg: "employee not found" },
			};
		}
		return {
			code: 200,
			response: employee,
		};
	}
}

export default EmployeeService;
