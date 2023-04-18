"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keccak_1 = require("ethereum-cryptography/keccak");
const utils_1 = require("ethereum-cryptography/utils");
function hashMessage(message) {
    const bytes = (0, utils_1.utf8ToBytes)(message);
    const hash = (0, keccak_1.keccak256)(bytes);
    return Buffer.from(hash).toString("hex");
}
exports.default = hashMessage;
