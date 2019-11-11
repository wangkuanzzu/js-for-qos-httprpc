import QOSRpc from './QOSRpc';
import { IApproveInput } from './Txs/Approve';
import { ITransferInput } from './Txs/Bank';
import { ICreateDelegationInput, IModifyDelegationInput, IUnbondDelegationInput } from './Txs/Delegation';
import { IKeyPair } from './types/common';
declare class Account {
    readonly rpc: QOSRpc;
    qos: number;
    mnemonic: string;
    keypair: IKeyPair;
    address: string;
    pubKey: string;
    privateKey: string;
    bech32pubkey: string;
    constructor(controller: QOSRpc, keyPair?: IKeyPair, mnemonic?: string);
    sendTransferTx(toAddress: string, data: ITransferInput): Promise<import("axios").AxiosResponse<any>>;
    sendCreateDelegateTx(validatorAddress: string, data: ICreateDelegationInput): Promise<import("axios").AxiosResponse<any>>;
    sendModifyDelegationTx(validatorAddress: string, data: IModifyDelegationInput): Promise<import("axios").AxiosResponse<any>>;
    sendUnbondDelegationTx(validatorAddress: string, data: IUnbondDelegationInput): Promise<import("axios").AxiosResponse<any>>;
    sendCheckTx(data: ITransferInput): Promise<import("axios").AxiosResponse<any>>;
    sendApproveTx(toAddress: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    sendCancelApproveTx(toAddress: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    sendIncreaseApproveTx(toAddress: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    sendDecreaseApproveTx(toAddress: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    sendUseApproveTx(toAddress: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
}
export default Account;
