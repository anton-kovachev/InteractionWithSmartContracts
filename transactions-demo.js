
import { getProvider } from './provider.js'
const provider = getProvider();
const address = "0x2e08451B79a01Cda253811E45719CeB42640c20d";

const txCount = await provider.getTransactionCount(address);
console.log(txCount);