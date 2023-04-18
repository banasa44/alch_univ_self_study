import hashMessage from './hashMessage';
const singMessage = require('./singMessage').default;


const message = 'Hello, world!';
const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";


console.log(hashMessage(message));
console.log(singMessage(message,PRIVATE_KEY));

