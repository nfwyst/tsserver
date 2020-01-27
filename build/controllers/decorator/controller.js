"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var appRouter_1 = require("../../appRouter");
var types_1 = require("./types");
var bodyValidate = function (keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (typeof req.body[key] === 'undefined') {
                res.status(422).send('Invalid request');
                return;
            }
        }
        return next();
    };
};
function Controller(prefixPath) {
    return function (target) {
        var prototype = target.prototype;
        for (var key in prototype) {
            var routeHandler = prototype[key];
            var path = Reflect.getMetadata(types_1.MetaDataKeys.PATH, prototype, key);
            var method = Reflect.getMetadata(types_1.MetaDataKeys.METHOD, prototype, key);
            var middlewares = Reflect.getMetadata(types_1.MetaDataKeys.MIDDLEWARE, target.prototype, key) || [];
            var router = appRouter_1.AppRouter.instance;
            var requiredBodyProps = Reflect.getMetadata(types_1.MetaDataKeys.VALIDATOR, prototype, key) || [];
            var validator = bodyValidate(requiredBodyProps);
            if (path)
                router[method].apply(router, __spreadArrays(["" + prefixPath + path], middlewares, [validator, routeHandler]));
        }
    };
}
exports.Controller = Controller;
