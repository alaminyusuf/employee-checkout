import { Router, Request, Response } from "express";
import EmployeeController from "../controller/Employee";

const controller = new EmployeeController();
const router: Router = Router();

router.get("/getAllEmployees", (req: Request, res: Response) => {
	return controller.getAllEmployees(req, res);
});

router.post("/employees/register", (req: Request, res: Response) => {
	return controller.create(req, res);
});
router.put("/employee/update", (req: Request, res: Response) => {
	return controller.updateEmployee(req, res);
});
router.delete("/employee/delete", (req: Request, res: Response) => {
	return controller.deleteEmployee(req, res);
});

export default router;
