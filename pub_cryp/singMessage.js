"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const secp256k1 = require("ethereum-cryptography/secp256k1").secp256k1;
const hashMessage_1 = __importDefault(require("./hashMessage"));
function signMessage(msg, key) {
    return __awaiter(this, void 0, void 0, function* () {
        const signedMessage = (0, hashMessage_1.default)(msg);
        return secp256k1.sign(signedMessage, key);
    });
}
exports.default = signMessage;
