"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var types_1 = require("./types");
function routeBinder(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata(types_1.MetaDataKeys.PATH, path, target, key);
            Reflect.defineMetadata(types_1.MetaDataKeys.METHOD, method, target, key);
        };
    };
}
exports.Get = routeBinder(types_1.Methods.GET);
exports.Post = routeBinder(types_1.Methods.POST);
exports.Put = routeBinder(types_1.Methods.PUT);
exports.Patch = routeBinder(types_1.Methods.PATCH);
exports.Delete = routeBinder(types_1.Methods.DELETE);
