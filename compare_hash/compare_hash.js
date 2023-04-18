"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const ethers_1 = require("ethers");
// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
// given a hash, return the color that created the hash
function findColor(hash) {
    const bytesArray = COLORS.map(str => (0, ethers_1.utf8ToBytes)(str));
    const hashArray = bytesArray.map(bytes => (0, crypto_1.default)(bytes));
    const index = hashArray.indexOf(hash);
    if (index !== -1) {
        return COLORS[index];
    }
    else {
        return "Color not found";
    }
}
