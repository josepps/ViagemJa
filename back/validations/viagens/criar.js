const { validate, Joi } = require("express-Validation");

module.exports = validate({
    body: Joi.object({
        data: Joi.date().required(),
        local: Joi.string().required(),
        atracoes: Joi.string().required(),
        descricao: Joi.string().required(),
        numerodevagas: Joi.number().required()
    }),
});