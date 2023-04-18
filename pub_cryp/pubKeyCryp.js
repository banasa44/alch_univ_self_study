"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keccak_1 = require("ethereum-cryptography/keccak");
const utils_1 = require("ethereum-cryptography/utils");
function hashMessage(message) {
    //   console.log(`message: ${message}, type: ${typeof message}`);
    //   const bytes = utf8ToBytes(message);
    //   console.log(`bytes: ${bytes}, type: ${typeof bytes}`);
    //   const hash = keccak256(bytes);
    //   console.log(`hash: ${hash}, type: ${typeof hash}`);
    //   const hex = Buffer.from(hash).toString("hex");
    //   console.log(`hex: ${hex}, type: ${typeof hex}`);
    return Buffer.from((0, keccak_1.keccak256)((0, utils_1.utf8ToBytes)(message))).toString("hex");
    ;
}
exports.default = hashMessage;
