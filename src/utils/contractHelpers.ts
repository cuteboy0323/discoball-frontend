import type { Signer } from '@ethersproject/abstract-signer';
import type { Provider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';
import { simpleRpcProvider } from 'utils/providers';

// Addresses
import { getRouterAddress, getMainTokenAddress, getSwapAddress } from 'utils/addressHelpers';

// ABI
import bep20 from 'config/abi/bep20.json';
import router from 'config/abi/pkrouter.json';

export const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
    const signerOrProvider = signer ?? simpleRpcProvider;
    return new Contract(address, abi, signerOrProvider);
};

export const getRouterContract = (signer?: Signer | Provider) => {
    return getContract(router, getRouterAddress(), signer);
};
export const getMainTokenContract = (signer?: Signer | Provider) => {
    return getContract(bep20, getMainTokenAddress(), signer);
};
export const getSwapContract = (active: string, signer?: Signer | Provider) => {
    return getContract(require(`config/abi/swap/${active}.json`), getSwapAddress(active), signer);
};
