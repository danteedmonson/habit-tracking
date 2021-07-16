//Validation
const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),

    email: Joi.string().min(6).required().email(),

    password: Joi.string().min(6).required(),
  });

  const { error, value } = schema.validate(data);

  return error;
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),

    password: Joi.string().min(6).required(),
  });

  const { error, value } = schema.validate(data);

  return error;
};

module.exports = {
  registerValid: registerValidation,
  loginValid: loginValidation,
};
