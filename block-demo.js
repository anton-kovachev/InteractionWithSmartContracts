import { getProvider } from './provider.js'
const provider = getProvider();

const blockNumber = await provider.getBlockNumber();
const block = await provider.getBlockWithTransactions(blockNumber);
console.log(block);