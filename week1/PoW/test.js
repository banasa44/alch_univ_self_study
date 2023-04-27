"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const miningBlocks_1 = require("./miningBlocks");
// Add a few transactions to the mempool
const transaction = { sender: 'Alice', recipient: 'Antoine', amount: '10' };
(0, miningBlocks_1.addTransaction)(transaction);
(0, miningBlocks_1.addTransaction)({ sender: 'Frank', recipient: 'Bob', amount: '7' });
(0, miningBlocks_1.addTransaction)({ sender: 'Eli', recipient: 'Eli', amount: '25' });
(0, miningBlocks_1.addTransaction)({ sender: 'Antoine', recipient: 'Bob', amount: '1' });
console.log(miningBlocks_1.blocks); // []
console.log(typeof miningBlocks_1.TARGET_DIFFICULTY); // bigint
console.log(typeof miningBlocks_1.MAX_TRANSACTIONS); // number
console.log(typeof miningBlocks_1.blocks); // object[]
console.log(typeof miningBlocks_1.mempool); // string[]
console.log(typeof transaction); // object
console.log(typeof miningBlocks_1.addTransaction); // function
console.log(typeof miningBlocks_1.mine); // function
// Mine a block and add it to the chain
console.log("Mempool_before mine:", miningBlocks_1.mempool);
(0, miningBlocks_1.mine)();
// Log the current state of the blockchain and mempool
console.log("Blocks:", miningBlocks_1.blocks);
console.log("Mempool_after mine:", miningBlocks_1.mempool);
// Type checking example
const invalidTransaction = { sender: "Alice", recipient: "Bob", amount: "100" };
// This should result in a TypeScript error as the `addTransaction` function expects a string argument
// addTransaction(invalidTransaction);
// Type checking example
const invalidBlock = { id: "1", nonce: 0, transactions: ["transaction 1", "transaction 2"], hash: "1234567890" };
// This should result in a TypeScript error as the `blocks` array expects an object with a `number` `id` property, an `Array` of `string` `transactions`, and an optional `string` `hash` property
miningBlocks_1.blocks.push(invalidBlock);
