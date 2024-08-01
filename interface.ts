export interface IEmployee {
	name: string;
	email: string;
	password: string;
	dept: string;
	level: string;
}

export type IEmployees = {
	code: number;
	response: IEmployee[];
};
