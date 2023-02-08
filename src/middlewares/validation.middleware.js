const {BadRequest} = require("http-errors");

const validationMiddleware = (schema) => async (req, res, next) => {
        const result = await schema.validate(req.body, { abortEarly: false });

        if (result.error !== undefined) {
            const fieldNames = result.error.details.map(error => error.path[0])

            next(new BadRequest(`Missing required fields: ${fieldNames.join(', ')}`));
        }

        next();
};

module.exports = { validationMiddleware }
