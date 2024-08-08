import { BaseRepository } from "../../repository/base/base.repository";
import { Model } from "sequelize-typescript";

export class BaseService<T extends Model> {
  protected repository: BaseRepository<T>;

  constructor(repository: BaseRepository<T>) {
    this.repository = repository;
  }

  async create(data: T): Promise<T> {
    return await this.repository.create(data);
  }

  async findById(ID: number): Promise<T | null> {
    return await this.repository.findById(ID);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.findAll();
  }

  async update(ID: number, data: Partial<T>): Promise<T> {
    return await this.repository.update(ID, data);
  }

  async delete(ID: number): Promise<number> {
    return await this.repository.delete(ID);
  }
}
