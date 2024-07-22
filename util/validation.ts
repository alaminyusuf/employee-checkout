import { IEmployee } from "../interface";

export const fieldValidation = (fields: IEmployee) => {
	if (fields.name == undefined || fields.name.length < 2) {
		return {
			code: 400,
			message: "Invalid name",
		};
	}

	if (fields.email == undefined || fields.email.length < 2) {
		return {
			code: 400,
			message: "Invalid email",
		};
	}

	if (fields.level == undefined || fields.dept.length < 4) {
		return {
			code: 400,
			message: "Invalid dept",
		};
	}

	if (fields.dept == undefined || fields.level.length < 2) {
		return {
			code: 400,
			message: "Invalid level",
		};
	}

	if (fields.password == undefined || fields.password.length < 5) {
		return {
			code: 400,
			message: "Invalid password",
		};
	}
	return null;
};
