"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = verifyPassword;
const crypto_1 = require("crypto");
const util_1 = require("util");
const scryptAsync = (0, util_1.promisify)(crypto_1.scrypt);
async function verifyPassword(storedResult, inputPassword) {
    const [salt, storedHash] = storedResult.split('.');
    const hash = (await scryptAsync(inputPassword, salt, 32));
    return storedHash === hash.toString('hex');
}
//# sourceMappingURL=verifyPassword.js.map