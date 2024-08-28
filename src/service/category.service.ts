import { BaseService } from "./base/base.service";
import { CategoryRepository } from "../repository/category.repository";
import { Category } from "../models/category.model";

export class CategoryService extends BaseService<Category> {
  constructor() {
    super(new CategoryRepository());
  }
}
