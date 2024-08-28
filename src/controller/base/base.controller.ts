import { Request, Response } from "express";
import { Model } from "sequelize-typescript";
import { BaseService } from "../../service/base/base.service";

export class BaseController<T extends Model> {
  protected service: BaseService<T>;

  constructor(service: BaseService<T>) {
    this.service = service;
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const item = await this.service.create(req.body);
      res.status(201).json(item);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const item = await this.service.findById(id);
      if (item) {
        res.status(200).json(item);
      } else res.status(404).json({ error: "Not Found" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const item = await this.service.update(id, req.body);
      res.status(200).json(item);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      await this.service.delete(id);
      res.status(200).json("Delete was successfully");
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
