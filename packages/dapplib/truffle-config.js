require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area suggest firm dash pumpkin color coral light army general'; 
let testAccounts = [
"0xa6b7a4a9b90ce3302362871842f59dc7eaa247fe4bcaa85297842eb9f5cda046",
"0xaa129471ed8c04fe95a20faf04b2acd382c7261c064ecfefa8f01357487eaf66",
"0x8ed4cb041a803179e6de0d40d2fb0d667c39638b40e54f7d75a7ece909c9b2ae",
"0xbc76b49627c612522ae7a3362812dc63404b2de5d1734d55a6a98e829ac50861",
"0xaea5a2023945c9dad78bc946d3f865f963b6d5c4ba45c6845ebbe163796ea1e4",
"0x584443fca14fe2bc05f3301cb110186edc66a950c3065a1ac7d0354f357c800b",
"0x58bc1a9424d373080bd008ca44d86b51e5e4825c0147843032d8422410d1f9e7",
"0x9025cb56955f1b4648f4f9c6ce77298847379a36bf0592026073ab353ed3dd5f",
"0x2a46bc3fa8c9b4fff91f8d5d17411193449e13b8fa649d5d6427611b29e0a5a5",
"0xa909fb46e2a6036190319cf8514dcb98f7445b2e4ccc3df81bc2f0ba76ea8a59"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

