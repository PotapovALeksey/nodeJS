const Joi = require('joi');

const contactSchema = Joi.object({
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    name: Joi.string().required(),
});

module.exports = { contactSchema };
