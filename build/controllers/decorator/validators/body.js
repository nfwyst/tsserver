"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var types_1 = require("../types");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(types_1.MetaDataKeys.VALIDATOR, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
