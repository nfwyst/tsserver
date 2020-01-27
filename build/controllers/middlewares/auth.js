"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function auth(req, res, next) {
    var session = req.session;
    if (session && session.loggedIn) {
        return next();
    }
    res.status(403).send('Not permitted');
}
exports.auth = auth;
