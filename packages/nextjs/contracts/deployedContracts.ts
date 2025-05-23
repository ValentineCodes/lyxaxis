/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  42: {
    Lyxaxis: {
      address: "0x8feB3A0810F2B6EC9D30726054747C06ACFB756A",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "Lyxaxis__NoOwners",
          type: "error",
        },
        {
          inputs: [],
          name: "Lyxaxis__NoRequiredSignatures",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "multisig",
              type: "address",
            },
          ],
          name: "CreatedMultisig",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "profileMetadata",
              type: "bytes",
            },
            {
              internalType: "address[]",
              name: "_owners",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "_signaturesRequired",
              type: "uint256",
            },
          ],
          name: "createWallet",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistry",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        createWallet: "contracts/interfaces/ILyxaxis.sol",
        getRegistry: "contracts/interfaces/ILyxaxis.sol",
      },
    },
  },
  4201: {
    Lyxaxis: {
      address: "0x4157288d14A6C166177F8fd9c8256362858e7e7E",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "Lyxaxis__NoOwners",
          type: "error",
        },
        {
          inputs: [],
          name: "Lyxaxis__NoRequiredSignatures",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "multisig",
              type: "address",
            },
          ],
          name: "CreatedMultisig",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "profileMetadata",
              type: "bytes",
            },
            {
              internalType: "address[]",
              name: "_owners",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "_signaturesRequired",
              type: "uint256",
            },
          ],
          name: "createWallet",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistry",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        createWallet: "contracts/interfaces/ILyxaxis.sol",
        getRegistry: "contracts/interfaces/ILyxaxis.sol",
      },
    },
  },
  31337: {
    Lyxaxis: {
      address: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "Lyxaxis__NoOwners",
          type: "error",
        },
        {
          inputs: [],
          name: "Lyxaxis__NoRequiredSignatures",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "multisig",
              type: "address",
            },
          ],
          name: "CreatedMultisig",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "profileMetadata",
              type: "bytes",
            },
            {
              internalType: "address[]",
              name: "_owners",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "_signaturesRequired",
              type: "uint256",
            },
          ],
          name: "createWallet",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegistry",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        createWallet: "contracts/interfaces/ILyxaxis.sol",
        getRegistry: "contracts/interfaces/ILyxaxis.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
