"server only";

import { PinataSDK } from "pinata-web3";

export const pinata = new PinataSDK({
  pinataJwt: `${process.env.PINATA_JWT}`,
  pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`,
});

export const FACTORY_CONTRACT_ADDRESS =
  "0x262e91309353958a1ae44341f71efc813129d87a";

export const FACTORY_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenTicker",
        type: "string",
      },
      {
        internalType: "string",
        name: "_nftBaseURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "createNewNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
    ],
    name: "NFTCreated",
    type: "event",
  },
];
