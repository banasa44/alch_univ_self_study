"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashMessage_1 = __importDefault(require("./hashMessage"));
const singMessage = require('./singMessage').default;
const message = 'Hello, world!';
const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
console.log((0, hashMessage_1.default)(message));
console.log(singMessage(message, PRIVATE_KEY));
