import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";

function hashMessage(message: string): string {
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
    return Buffer.from(hash).toString("hex");
  }

export default hashMessage;
