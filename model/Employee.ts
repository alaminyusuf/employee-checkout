import { Schema, model } from "mongoose";

interface IEmployee {
	name: string;
	email: string;
	password: string;
	dept: string;
	level: string;
}

const EmployeeSchema = new Schema<IEmployee>({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	dept: {
		type: String,
		enum: ["TEST", "REVIEW", "WORKFORCE", "DECISION"],
	},
	level: {
		type: String,
		enum: ["BASIC", "LOWER", "MIDDLE", "TOP"],
		default: "BASIC",
	},
});

export default model<IEmployee>("Employee", EmployeeSchema);
