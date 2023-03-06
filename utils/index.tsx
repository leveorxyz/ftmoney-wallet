import ethers from 'ethers';
import crypto from 'crypto';

export const createPrivateKeyPair = () => {
    const id = crypto.randomBytes(32).toString('hex');
    const privateKey = "0x"+id;

    const wallet = new ethers.Wallet(privateKey);

    return {privateKey, publicKey: wallet.address}
}


