"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var types_1 = require("./types");
function Use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(types_1.MetaDataKeys.MIDDLEWARE, target, key)
            || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(types_1.MetaDataKeys.MIDDLEWARE, middlewares, target, key);
    };
}
exports.Use = Use;
