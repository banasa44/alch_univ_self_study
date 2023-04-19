import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";

function hashMessage(message: string): Uint8Array {
  const hashedMessage = keccak256(utf8ToBytes(Buffer.from(message).toString('utf8')));
  return new Uint8Array(hashedMessage);
}

export default hashMessage;


