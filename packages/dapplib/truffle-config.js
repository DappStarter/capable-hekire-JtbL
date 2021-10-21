require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note pave pulp harvest nasty equal gaze'; 
let testAccounts = [
"0x46c33840d5e6c3b2884cb4680e8f82360287e53f72f6ad18265cca238677f0c2",
"0xc2156616f748f1fb2d6302f5b4f177a6aa8b92455e3d2b4b8fcdb9fe326d470e",
"0x569d4bb6be134aef40528d587e57ec020f4378c357626968ab173c0db12afe16",
"0xa2548ab502668d9386642e7a655456374f0e48f0f25bc7155dcfd48441c02e29",
"0x3ccf6e4e3f58c08c5b7b14f89305da641c71cc91c50d5f3d281b4127ca9d8ff9",
"0x372650d7eea4176bc958b6eb263de36236c28407656e5bb1c69210a368572fb4",
"0x46404a264fecb844d0a35cfb84133a8ac5859e316804db3d0032a77d3138b27a",
"0x6ed0c8f41ab89e6c82d55e17c1ced8d516a352e4a79694df499fc106815b79f2",
"0xef6b03d07ea4cba15f4026ee33d72dfe04bc341d0821e0c62c3a0915d2d9054b",
"0x2b9758bc495c856d4d201cb3a63b14d373386c8161b771aa4939a403fc1c9ee8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

