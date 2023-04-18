import hashMessage from './pubKeyCryp';

const message = 'Hello, world!';
const hash = hashMessage(message);
console.log(`Hash of "${message}": ${hash}`);
