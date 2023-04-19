const secp256k1 = require("noble-secp256k1");
import hashMessage from './hashMessage';

async function signMessage(msg: string,key:string): Promise<{ r: string, s: string, v: number }> {
  const signedMessage = hashMessage(msg);
  return secp256k1.sign(signedMessage, key, { recovered: true });
}

export default signMessage;



