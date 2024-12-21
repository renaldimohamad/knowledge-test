"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
const error_code_1 = __importDefault(require("./constans/error_code"));
const error_message_1 = __importDefault(require("./constans/error_message"));
function errorHandler(res, err) {
    let message = err.message;
    res.status(error_code_1.default[message] || 500).json({
        error: error_message_1.default[message] || message,
    });
}
