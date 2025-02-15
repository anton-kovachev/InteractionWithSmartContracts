import { ethers } from 'ethers';
import { getProvider } from './provider.js'

const addr = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const provider = getProvider();


const filter = {
    address: addr,
    topics: [ethers.utils.id("Transfer(address,address,uint256)"), null, null, null]
}

// const logs = await provider.getLogs(filter);
// console.log(logs);

provider.on(filter, (log) => {
    console.log(log);
});

const listenerCount = provider.listenerCount(filter);
console.log(listenerCount);
