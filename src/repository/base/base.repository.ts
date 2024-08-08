import { Model, ModelCtor } from "sequelize-typescript";
import { MakeNullishOptional } from "sequelize/types/utils";

export class BaseRepository<T extends Model> {
  protected model: ModelCtor<T>;

  constructor(model: ModelCtor<T>) {
    this.model = model;
  }

  async create(data: T): Promise<T> {
    return await this.model.create(
      data as MakeNullishOptional<T["_creationAttributes"]>
    );
  }

  async findById(ID: number): Promise<T | null> {
    return await this.model.findByPk(ID);
  }

  async findAll(): Promise<T[]> {
    return await this.model.findAll();
  }

  async update(ID: number, data: Partial<T>): Promise<T> {
    const recordToUpdate = await this.model.findByPk(ID);
    return await recordToUpdate!.update(data);
  }

  async delete(ID: number): Promise<any> {
    const recordToDelete = await this.model.findByPk(ID);
    return await recordToDelete!.destroy();
  }
}
