import { Request, Response, NextFunction } from "express";

/**
 * Wraps an asynchronous function and catches any errors, passing them to the next middleware.
 * @param fn The asynchronous function to wrap.
 */
export const catchAsync = (fn: Function) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(next);
	};
};
