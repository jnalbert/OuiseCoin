"use strict";
exports.__esModule = true;
exports.Block = void 0;
var SHA256 = require('crypto-js/sha256');
var Block = /** @class */ (function () {
    function Block(index, data, prevHash) {
        if (prevHash === void 0) { prevHash = " "; }
        this.index = index;
        this.timeStamp = new Date;
        this.data = data;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = this.computeHash();
    }
    Block.prototype.computeHash = function () {
        return SHA256(this.index + this.timeStamp.toString() + JSON.stringify(this.data) + this.prevHash + this.nonce).toString();
    };
    Block.prototype.proofOfWork = function (difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.computeHash();
            // console.log(this.nonce);
            // console.log(this)
        }
    };
    return Block;
}());
exports.Block = Block;
