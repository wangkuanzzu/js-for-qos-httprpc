export default class SecretKey {
    generateMnemonic(): string;
    genarateKeyPair(mnemonic: string): {
        privateKey: any;
        pubKey: any;
        accAddress: any;
        privateKeyBz: any;
        pubKeyBz: any;
    };
    recoveryKeyPair(privateKey: string): {
        privateKey: any;
        pubKey: any;
        accAddress: any;
        privateKeyBz: any;
        pubKeyBz: any;
    };
    verifyBech32String(accAddress: string): any;
    getBech32PubKey(publicKey: any): any;
    test(): void;
    getAddress(publicKey: Uint8Array): any;
}
