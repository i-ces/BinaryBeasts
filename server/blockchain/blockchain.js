/*let A = party-1 ,
	  B =  party-2,
	  C = party-3
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

Blockchain.prototype.getLastBlock = function(){
	return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewVote = function(receiver=''){
	// const newTransaction ={
	// 	// amount: amount || 0,
	// 	// sender: sender || '',
	// 	To: receiver || 'No Vote'
	// };

	// this.pendingTransactions.push(newTransaction);
	this.pendingVote = receiver;
	return ( this.getLastBlock()['index'] + 1) ;
	//this pending transaction will be added to comming new block
}

Blockchain.prototype.hashBlock = function(previousBlockHash='', currentBlockData='', nonce=0){
	const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
	const hash = sha256(dataAsString);
	return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash='', currentBlockData=''){
	let nonce = 0;
	let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
	while( hash.substring(0,4) !== '0000'){
		nonce++;
		hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
		//console.log(hash);
	}
	return nonce;
}





module.exports = Blockchain;