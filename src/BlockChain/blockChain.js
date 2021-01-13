"use strict";
exports.__esModule = true;
exports.BlockChain = void 0;
var block_1 = require("./block");
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        this.nodes = new Set();
        this.blockChain = [this.createGenesisBlock()];
        this.waitingTransactions = [];
        this.difficulty = 4;
    }
    BlockChain.prototype.createGenesisBlock = function () {
        return new block_1.Block(0, [{ sender: "Start", receiver: "start", amount: 0 }], " ");
    };
    BlockChain.prototype.getLatestBlock = function () {
        return this.blockChain[this.blockChain.length - 1];
    };
    BlockChain.prototype.getFullLedger = function () {
        return this.blockChain;
    };
    BlockChain.prototype.addNewTransaction = function (sender, receiver, amount) {
        this.waitingTransactions.push({
            sender: sender,
            receiver: receiver,
            amount: amount
        });
        return "Block transaction will be in" + (this.getLatestBlock().index - 1);
    };
    BlockChain.prototype.getTransactions = function () {
        return this.waitingTransactions;
    };
    BlockChain.prototype.getNodes = function () {
        return this.nodes;
    };
    BlockChain.prototype.checkChainValidity = function () {
        for (var i = 1; i < this.blockChain.length; i++) {
            var currentBlock = this.blockChain[i];
            var prevBlock = this.blockChain[i - 1];
            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }
            if (prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
            return true;
        }
    };
    BlockChain.prototype.mineNewBlock = function () {
        var oldBlock = this.getLatestBlock();
        var newBlock = new block_1.Block(oldBlock.index + 1, this.waitingTransactions, oldBlock.hash);
        newBlock.proofOfWork(this.difficulty);
        this.blockChain.push(newBlock);
        this.waitingTransactions = [];
    };
    return BlockChain;
}());
exports.BlockChain = BlockChain;
