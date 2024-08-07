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

  async findById(id: number): Promise<T | null> {
    return await this.repository.findById(id);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.findAll();
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return await this.repository.update(id, data);
  }

  async delete(id: number): Promise<number> {
    return await this.repository.delete(id);
  }
}
