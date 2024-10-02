import Joi from "joi";

const updateCategorySchema = Joi.object({
  nameCategory: Joi.string().max(20).required(),
});

module.exports = updateCategorySchema;
