"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.get('/', (req, res) => {
    res.send('Welcome!');
});
app.use(not_found_1.default);
app.use(error_handler_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
