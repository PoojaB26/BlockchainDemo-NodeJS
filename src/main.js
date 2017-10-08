const SHA256 = require("crypto-js/sha256");
var http = require('http');
var fs = require('fs');

const PORT=8080;


class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("BLOCK MINED: " + this.hash);
    }
}


class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 1;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2017", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}
let savjeeCoin = new Blockchain();
console.log('Mining block 1...');
savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));

console.log('Mining block 2...');
savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));

console.log('Mining block 3...');
savjeeCoin.addBlock(new Block(3, "21/06/2017", { amount:12 }));


fs.readFile('./main-page.html', function (err, html) {

    if (err) throw err;

    /*http.createServer(function(request, response) {
     response.writeHeader(200, {"Content-Type": "text/html"});
     response.write(html);
     response.end();
     }).listen(PORT);*/

    http.createServer(function (req, res) {
        res.write('<html><head></head><body>');
        res.write('<div class="peerA" style="border-style: solid;border-color: darkgray;border-width: 2px;margin-bottom: 10px;">');
        res.write('<h2>Peer A</h2>');
        res.write('<b>Block 1 </b><br> Previous Hash: ' +  savjeeCoin.chain[1].previousHash + '<br> Current hash: ' +savjeeCoin.chain[1].hash);
        res.write('<br>Data:'+savjeeCoin.chain[1].data.amount);
        res.write('<br><br><b>Block 2 </b><br> Previous Hash: ' +  savjeeCoin.chain[2].previousHash + '<br> Current hash: ' +savjeeCoin.chain[2].hash);
        res.write('<br>Data:'+savjeeCoin.chain[2].data.amount);
        res.write('<br><br><b>Block 3 </b><br> Previous Hash: ' +  savjeeCoin.chain[3].previousHash + '<br> Current hash: ' +savjeeCoin.chain[3].hash);
        res.write('<br>Data:'+savjeeCoin.chain[3].data.amount);
        res.write('</div>');


        res.write('<div class="peerB" style="border-style: solid;border-color: darkgray;border-width: 2px;margin-bottom: 10px;">');
        res.write('<h2>Peer B</h2>');
        res.write('<b>Block 1 </b><br> Previous Hash: ' +  savjeeCoin.chain[1].previousHash + '<br> Current hash: ' +savjeeCoin.chain[1].hash);
        res.write('<br>Data:'+savjeeCoin.chain[1].data.amount);
        res.write('<br><br><b>Block 2 </b><br> Previous Hash: ' +  savjeeCoin.chain[2].previousHash + '<br> Current hash: ' +savjeeCoin.chain[2].hash);
        res.write('<br>Data:'+savjeeCoin.chain[2].data.amount);
        res.write('<br><br><b>Block 3 </b><br> Previous Hash: ' +  savjeeCoin.chain[3].previousHash + '<br> Current hash: ' +savjeeCoin.chain[3].hash);
        res.write('<br>Data:'+savjeeCoin.chain[3].data.amount);
        res.write('</div>');

        res.write('<div class="peerC" style="border-style: solid;border-color: darkgray;border-width: 2px;">');
        res.write('<h2>Peer C</h2>');
        res.write('<b>Block 1 </b><br> Previous Hash: ' +  savjeeCoin.chain[1].previousHash + '<br> Current hash: ' +savjeeCoin.chain[1].hash);
        res.write('<br>Data:'+savjeeCoin.chain[1].data.amount);
        res.write('<br><br><b>Block 2 </b><br> Previous Hash: ' +  savjeeCoin.chain[2].previousHash + '<br> Current hash: ' +savjeeCoin.chain[2].hash);
        res.write('<br>Data:'+savjeeCoin.chain[2].data.amount);
        res.write('<br><br><b>Block 3 </b><br> Previous Hash: ' +  savjeeCoin.chain[3].previousHash + '<br> Current hash: ' +savjeeCoin.chain[3].hash);
        res.write('<br>Data:'+savjeeCoin.chain[3].data.amount);
        res.write('</div>');

        res.end('</body></html>');
    }).listen(PORT);

});