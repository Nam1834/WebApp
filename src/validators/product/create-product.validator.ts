import Joi from "joi";

const createProductSchema = Joi.object({
  productName: Joi.string().max(20).required(),
  productPrice: Joi.number().max(20).required(),
  productImage: Joi.string().max(250).required(),
  productQuantity: Joi.number().max(20).required(),
});

module.exports = createProductSchema;
