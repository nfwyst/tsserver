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
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n      <form method=\"POST\">\n        <div>\n          <label>\u90AE\u7BB1</label>\n          <input type=\"email\" name=\"email\" />\n        </div>\n        <div>\n          <label>\u5BC6\u7801</label>\n          <input type=\"password\" name=\"password\" />\n        </div>\n        <button>\u63D0\u4EA4</button>\n      </form>\n    ");
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, password = _a.password, email = _a.email;
        if (email === 'hi@world.com' && password === '123456') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('invalid email or password');
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        decorator_1.Get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorator_1.Post('/login'),
        decorator_1.bodyValidator('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        decorator_1.Get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        decorator_1.Controller('/auth')
    ], LoginController);
    return LoginController;
}());
exports.default = LoginController;
