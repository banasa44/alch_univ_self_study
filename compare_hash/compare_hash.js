"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findColor = void 0;
const crypto_js_1 = require("crypto-js");
// given a hash, return the color that created the hash
function findColor(hash, COLORS) {
    const index = COLORS
        .map(str => (0, crypto_js_1.SHA256)(crypto_js_1.enc.Utf8.parse(str)))
        .findIndex(h => h.toString() === hash);
    return index !== -1 ? COLORS[index] : null;
}
exports.findColor = findColor;
