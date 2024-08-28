import { Category } from "../models/category.model";
import { BaseRepository } from "./base/base.repository";

export class CategoryRepository extends BaseRepository<Category> {
  constructor() {
    super(Category);
  }
}
