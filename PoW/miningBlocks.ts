import { SHA256 } from 'crypto-js';

export const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
export const MAX_TRANSACTIONS = 10;

export const addTransaction = (transaction: string): void => {
    mempool.push(transaction)
}

export const mine = (): void => {
    const block: {id:number, nonce: number, hash?:string, transactions: Array<string>} = { id: blocks.length, nonce: 0, hash: undefined, transactions:[]};
    let _hash = SHA256(JSON.stringify(block))
    while (BigInt(`0x${_hash}`) > TARGET_DIFFICULTY){
        block.nonce ++;
        _hash = SHA256(JSON.stringify(block));
    }
    block.hash = _hash.toString();
    block.transactions = mempool.splice(0, MAX_TRANSACTIONS);
    blocks.push(block)
}

export const blocks: object[] = [];
export const mempool: string[] = [];
