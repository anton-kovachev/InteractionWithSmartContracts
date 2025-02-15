import { ethers } from "ethers";
import dotenv from 'dotenv';

export function getProvider() {
    dotenv.config();

    const proivder = new ethers.providers.InfuraProvider('homestead', process.env.INFURE_API_KEY);
    return proivder;
}