import { type NextFunction, type Request, type Response } from "express";

export interface Controller {
    run(req: Request, res: Response, next: NextFunction): Promise<void>
}