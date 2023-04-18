"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findColor = void 0;
const crypto_js_1 = require("crypto-js");
// given a hash, return the color that created the hash
function findColor(hash, COLORS) {
    return COLORS.find(x => (0, crypto_js_1.SHA256)(crypto_js_1.enc.Utf8.parse(x)).toString(crypto_js_1.enc.Hex) === hash);
}
exports.findColor = findColor;
