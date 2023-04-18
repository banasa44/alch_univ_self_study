import { SHA256, enc } from 'crypto-js';

// given a hash, return the color that created the hash
export function findColor(hash: string,COLORS: string[]): string | null {
    const index = COLORS
      .map(str => SHA256(enc.Utf8.parse(str)))
      .findIndex(h => h.toString() === hash);
    return index !== -1 ? COLORS[index] : null;
}
