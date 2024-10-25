const { body, query, param } = require("express-validator");
const { ObjectId } = require("mongodb");
module.exports = class CategoriasValidator {

    validateCategoriesDataEmpty = () => {
        return [
            body().custom((value, { req }) => {
                if (Object.keys(req.body).length > 0) {
                    throw new Error('No mandar nada en el body');
                }
                return true;
            }),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`No mandar nada en la url`);
                }
                return true;
            })
        ];
    };

}