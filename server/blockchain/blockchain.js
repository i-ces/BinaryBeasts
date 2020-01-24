/*let A = congress ,
	  B = Eamaale,
	  C = maoobaadi
*/
const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];

function Blockchain(){
	this.chain = [];
	this.pendingVote = '';

	this.currentNodeUrl = currentNodeUrl;
	this.networkNodes = [];

	this.createNewBlock(100,'0','0');
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
	const newBlock ={
		index: this.chain.length + 1,
		//timestamp: Date.now(),
		Vote: this.pendingVote,
		nonce:  nonce || 0,
		hash: hash || '',
		previousBlockHash: previousBlockHash || ''
	};

	this.pendingVote = '';
	this.chain.push(newBlock);

		return newBlock;
}