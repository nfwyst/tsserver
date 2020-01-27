"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var cookie_session_1 = __importDefault(require("cookie-session"));
var appRouter_1 = require("./appRouter");
require("./controllers");
var app = express_1.default();
app
    .use(body_parser_1.urlencoded({ extended: true }))
    .use(cookie_session_1.default({ keys: ['hello world'] }))
    .use(appRouter_1.AppRouter.instance)
    .listen(3000, function () { return console.log('server start on port 3000'); });
