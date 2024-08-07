import Joi from "joi";

const createUserSchema = Joi.object({
  phoneNumber: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
  passWord: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "user").required(),
});

module.exports = createUserSchema;
