"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compare_hash_1 = require("./compare_hash");
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
const hash_bad = 'ede4c8e51da3af3a85f245e144ebe7c8cafe231c20b1b9d13f18a8e293b3c3e3';
const hash_good = 'b1f51a511f1da0cd348b8f8598db32e61cb963e5fc69e2b41485bf99590ed75a';
const color = (0, compare_hash_1.findColor)(hash_good, COLORS);
if (color) {
    console.log(`The color that created the hash_good ${hash_good} is ${color}.`);
}
else {
    console.log(`Color not found for hash_good ${hash_good}.`);
}
