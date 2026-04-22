import { Router } from "express";
import EmployeeController from "../controller/Employee";
import { catchAsync } from "../util/catchAsync";

const controller = new EmployeeController();
const router: Router = Router();

/**
 * @route GET /api/getAllEmployees
 * @desc Get all employees
 */
router.get("/getAllEmployees", catchAsync(controller.getAllEmployees));

/**
 * @route POST /api/employees/register
 * @desc Register a new employee
 */
router.post("/employees/register", catchAsync(controller.create));

/**
 * @route PUT /api/employee/update
 * @desc Update employee details
 */
router.put("/employee/update", catchAsync(controller.updateEmployee));

/**
 * @route DELETE /api/employee/delete
 * @desc Delete an employee
 */
router.delete("/employee/delete", catchAsync(controller.deleteEmployee));

export default router;
