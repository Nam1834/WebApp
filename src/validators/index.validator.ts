const createUserValidate = require("./user/create-user.validator");
const updateUserValidate = require("./user/update-user.validator");
const createCategoryValidate = require("./category/create-category.validator");
const updateCategoryValidate = require("./category/update-category.validator");

module.exports = { createUserValidate, updateUserValidate };
