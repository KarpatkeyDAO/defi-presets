/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITransactionUnwrapper,
  ITransactionUnwrapperInterface,
} from "../../../../contracts/adapters/Types.sol/ITransactionUnwrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "unwrap",
    outputs: [
      {
        components: [
          {
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dataLocation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dataSize",
            type: "uint256",
          },
        ],
        internalType: "struct UnwrappedTransaction[]",
        name: "result",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ITransactionUnwrapper__factory {
  static readonly abi = _abi;
  static createInterface(): ITransactionUnwrapperInterface {
    return new utils.Interface(_abi) as ITransactionUnwrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransactionUnwrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITransactionUnwrapper;
  }
}