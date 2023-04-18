"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashMessage_1 = __importDefault(require("./hashMessage"));
const message = 'Hello, world!';
console.log((0, hashMessage_1.default)(message));
