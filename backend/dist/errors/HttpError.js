"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
const ts_custom_error_1 = require("ts-custom-error");
class HttpError extends ts_custom_error_1.CustomError {
    constructor(code, statusCode, message) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
    }
}
exports.HttpError = HttpError;
