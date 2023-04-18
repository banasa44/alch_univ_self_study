const secp256k1 = require("ethereum-cryptography/secp256k1").secp256k1;
import hashMessage from './hashMessage';

async function signMessage(msg: string,key:string): Promise<{ r: string, s: string, v: number }> {
  const signedMessage = hashMessage(msg);
  return secp256k1.sign(signedMessage, key);
}

export default signMessage;
