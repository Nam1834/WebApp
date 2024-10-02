const createUserValidate = require("./user/create-user.validator");
const updateUserValidate = require("./user/update-user.validator");
const createCategoryValidate = require("./category/create-category.validator");
const updateCategoryValidate = require("./category/update-category.validator");
const createProductValidate = require("./product/create-product.validator");
const updateProdcutValidate = require("./product/update-product.validator");

module.exports = {
  createUserValidate,
  updateUserValidate,
  createCategoryValidate,
  updateCategoryValidate,
  createProductValidate,
  updateProdcutValidate,
};
