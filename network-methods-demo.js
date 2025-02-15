import { ethers } from 'ethers';
import { getProvider } from './provider.js'
const provider = getProvider();

const fee = await provider.getFeeData();
console.log( ethers.utils.formatEther(fee.gasPrice));