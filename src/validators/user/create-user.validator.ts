import Joi from "joi";

const createUserSchema = Joi.object({
  phoneNumber: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(8)
    .required(),
  passWord: Joi.string().min(8).required(),
  role: Joi.string().valid("admin", "user").required(),
});

module.exports = createUserSchema;
