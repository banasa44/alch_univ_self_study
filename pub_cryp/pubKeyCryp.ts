import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";

function hashMessage(message: string): string {
  console.log(`message: ${message}, type: ${typeof message}`);

  const bytes = utf8ToBytes(message);
  console.log(`bytes: ${bytes}, type: ${typeof bytes}`);

  const hash = keccak256(bytes);
  console.log(`hash: ${hash}, type: ${typeof hash}`);

  const hex = Buffer.from(hash).toString("hex");
  console.log(`hex: ${hex}, type: ${typeof hex}`);

  return hex;
}

export default hashMessage;
