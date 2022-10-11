"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    db: process.env.NODE_ENV === 'test' ? 'test.sqlite' : 'db.sqlite',
    jwtSecret: process.env.JWT_SECRET,
    port: 3000,
});
//# sourceMappingURL=configuration.js.map