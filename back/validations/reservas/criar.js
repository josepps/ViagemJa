const { validate, Joi } = require("express-Validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        passagens: Joi.number().required(),
        viagem_id: Joi.number().required()
    }),
});