"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = require("./decorator");
var middlewares_1 = require("./middlewares");
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        var session = req.session;
        if (session && session.loggedIn) {
            res.send("\n        <div>You are logged in</div>\n        <a href=\"/auth/logout\">logout</a>\n      ");
        }
        else {
            res.send("\n        <div>You are not logged in</div>\n        <a href=\"/auth/login\">login</a>\n      ");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send('Welcome to protected route, logged in user');
    };
    __decorate([
        decorator_1.Get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        decorator_1.Get('/protected'),
        decorator_1.Use(middlewares_1.auth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        decorator_1.Controller('')
    ], RootController);
    return RootController;
}());
exports.default = RootController;
