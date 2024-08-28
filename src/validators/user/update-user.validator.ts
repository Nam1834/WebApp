import Joi from "joi";

const updateUserSchema = Joi.object({
  passWord: Joi.string().min(8).required(),
});

module.exports = updateUserSchema;
