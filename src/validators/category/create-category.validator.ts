import Joi from "joi";

const createCategorySchema = Joi.object({
  nameCategory: Joi.string().max(20).required(),
});

module.exports = createCategorySchema;
