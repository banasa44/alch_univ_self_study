const MerkleTree = require('./merkleTree');
const verifyProof = require('./verifyProof');

// Define the `concat` function to concatenate two strings
const concat = (a, b) => a + b;

// Define the leaves
const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Create a new MerkleTree instance
const merkleTree = new MerkleTree(leaves, concat);

// Get the root hash of the MerkleTree
const _root = merkleTree.getRoot();
console.log('Root:', _root);

// Get the proof for index 2 (which is C)
const proof = merkleTree.getProof(3);
console.log('Proof:', proof);

const verify = verifyProof(proof,'D',concat,_root);
console.log('Verified?:', verify);
