export interface IEmployee {
	name: string;
	email: string;
	password: string;
	dept: string;
	level: string;
}

export type ApiError = {
	code: number;
	message: string;
};

export type IEmployees = {
	code: number;
	response: IEmployee[];
};
