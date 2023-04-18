import { SHA256, enc } from 'crypto-js';

// given a hash, return the color that created the hash
export function findColor(hash: string, COLORS: string[]): string | undefined {
  return COLORS.find(x => SHA256(enc.Utf8.parse(x)).toString(enc.Hex) === hash);
}
