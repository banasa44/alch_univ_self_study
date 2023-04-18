"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubKeyCryp_1 = __importDefault(require("./pubKeyCryp"));
const message = 'Hello, world!';
console.log((0, pubKeyCryp_1.default)(message));
