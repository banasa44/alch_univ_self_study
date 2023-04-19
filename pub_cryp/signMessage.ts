import { secp256k1 } from "ethereum-cryptography/secp256k1";
import hashMessage from "./hashMessage";

async function signMessage(msgHash: string, privateKey: Uint8Array): Promise<{ r: bigint; s: bigint; recovery: number | undefined }> {
  const msgHashed = hashMessage(msgHash);
  const signature = secp256k1.sign(msgHashed, privateKey);
  const sig: any = signature;
  return { r: BigInt(`0x${sig.slice(0, 32).toString("hex")}`), s: BigInt(`0x${sig.slice(32).toString("hex")}`), recovery: signature.recovery };
};

export default signMessage;