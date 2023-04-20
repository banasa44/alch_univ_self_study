import { addTransaction, mine, blocks, mempool,TARGET_DIFFICULTY, MAX_TRANSACTIONS} from "./miningBlocks";

// Add a few transactions to the mempool

const transaction = { sender: 'Alice', recipient: 'Antoine', amount: '10' };
addTransaction(transaction);
addTransaction({sender: 'Frank', recipient: 'Bob', amount: '7' });
addTransaction({sender: 'Eli', recipient: 'Eli', amount: '25' });
addTransaction({sender: 'Antoine', recipient: 'Bob', amount: '1' });

console.log(blocks); // []

console.log(typeof TARGET_DIFFICULTY); // bigint
console.log(typeof MAX_TRANSACTIONS); // number
console.log(typeof blocks); // object[]
console.log(typeof mempool); // string[]
console.log(typeof transaction); // object
console.log(typeof addTransaction); // function
console.log(typeof mine); // function

// Mine a block and add it to the chain

console.log("Mempool_before mine:", mempool);
mine();

// Log the current state of the blockchain and mempool
console.log("Blocks:", blocks);
console.log("Mempool_after mine:", mempool);

// Type checking example
const invalidTransaction = { sender: "Alice", recipient: "Bob", amount: "100" };
// This should result in a TypeScript error as the `addTransaction` function expects a string argument
// addTransaction(invalidTransaction);

// Type checking example
const invalidBlock = { id: "1", nonce: 0, transactions: ["transaction 1", "transaction 2"], hash: "1234567890" };
// This should result in a TypeScript error as the `blocks` array expects an object with a `number` `id` property, an `Array` of `string` `transactions`, and an optional `string` `hash` property
blocks.push(invalidBlock);
