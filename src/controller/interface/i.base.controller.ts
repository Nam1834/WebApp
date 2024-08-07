import { NextFunction, Request, Response } from "express";
export interface IBaseController<T> {
  findOne(req: Request, res: Response, next: NextFunction): Promise<T>;
  findAll(req: Request, res: Response, next: NextFunction): Promise<T[]>;
  create(req: Request, res: Response, next: NextFunction): Promise<T>;
  update(req: Request, res: Response, next: NextFunction): Promise<T>;
  delete(req: Request, res: Response, next: NextFunction): Promise<any>;
}
