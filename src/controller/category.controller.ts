import { UserRequest } from "../middleware/authenticate.middleware";
import { Category } from "../models/category.model";
import { CategoryService } from "../service/category.service";
import { BaseController } from "./base/base.controller";
import { Request, Response } from "express";

class CategoryController extends BaseController<Category> {
  protected categoryService: CategoryService;
  constructor() {
    super(new CategoryService());
    this.categoryService = new CategoryService();
  }
}
const categoryController = new CategoryController();
export default categoryController;
