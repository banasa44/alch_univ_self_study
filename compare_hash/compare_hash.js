"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findColor = exports.COLORS = void 0;
const crypto_1 = require("crypto");
const ethers_1 = require("ethers");
// the possible colors that the hash could represent
exports.COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
// given a hash, return the color that created the hash
function findColor(hash, colors) {
    const bytesArray = exports.COLORS.map(str => (0, ethers_1.toUtf8Bytes)(str));
    const hashArray = bytesArray.map(bytes => (0, crypto_1.createHash)('sha256').update(bytes).digest('hex'));
    console.log(hashArray);
    const index = hashArray.indexOf(hash);
    if (index !== -1) {
        return exports.COLORS[index];
    }
    else {
        return "Color not found";
    }
}
exports.findColor = findColor;
