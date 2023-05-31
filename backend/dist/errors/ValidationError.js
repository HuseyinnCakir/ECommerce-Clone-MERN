"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqValidationError = void 0;
const HttpError_1 = require("./HttpError");
class ReqValidationError extends HttpError_1.CustomError {
    constructor(errors) {
        super();
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, ReqValidationError.prototype);
    }
    formatErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, field: err.type };
        });
    }
}
exports.ReqValidationError = ReqValidationError;
