import hashMessage from './hashMessage';
const signMessage = require('./signMessage').default;


const message = 'Hello, world!';
const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";


console.log(hashMessage(message));

const hashedMessage = hashMessage(message);
const signature =  signMessage(hashedMessage, PRIVATE_KEY);
console.log(signature);

(async () => {
  const hashedMessage = hashMessage(message);
  const signature = await signMessage(hashedMessage, PRIVATE_KEY);
  console.log(signature);
})();