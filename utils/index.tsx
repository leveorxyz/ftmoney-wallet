import {HDNodeWallet, Wallet} from 'ethers';

export const createPrivateKeyPair = (): HDNodeWallet => {
    return Wallet.createRandom();
}


