"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mempool = exports.blocks = exports.mine = exports.addTransaction = exports.MAX_TRANSACTIONS = exports.TARGET_DIFFICULTY = void 0;
const crypto_js_1 = require("crypto-js");
exports.TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
exports.MAX_TRANSACTIONS = 10;
const addTransaction = (transaction) => {
    exports.mempool.push(transaction);
};
exports.addTransaction = addTransaction;
const mine = () => {
    const block = { id: exports.blocks.length, nonce: 0, hash: undefined, transactions: [] };
    let _hash = (0, crypto_js_1.SHA256)(JSON.stringify(block));
    while (BigInt(`0x${_hash}`) > exports.TARGET_DIFFICULTY) {
        block.nonce++;
        _hash = (0, crypto_js_1.SHA256)(JSON.stringify(block));
    }
    block.hash = _hash.toString();
    block.transactions = exports.mempool.splice(0, exports.MAX_TRANSACTIONS);
    exports.blocks.push(block);
};
exports.mine = mine;
exports.blocks = [];
exports.mempool = [];
