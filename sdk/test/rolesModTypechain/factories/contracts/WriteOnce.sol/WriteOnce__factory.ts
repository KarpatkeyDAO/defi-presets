/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WriteOnce,
  WriteOnceInterface,
} from "../../../contracts/WriteOnce.sol/WriteOnce";

const _abi = [
  {
    inputs: [],
    name: "SALT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SINGLETON_FACTORY",
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
] as const;

const _bytecode =
  "0x60c3610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063ba9a91a5146042578063cf8a37af14605c575b600080fd5b6049600081565b6040519081526020015b60405180910390f35b607673ce0042b868300000d44a59004da54a005ffdcf9f81565b6040516001600160a01b039091168152602001605356fea2646970667358221220f18a2b22c41911a6b6c302617cc199bd247541971af41db23a694663430a528264736f6c63430008110033";

type WriteOnceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WriteOnceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WriteOnce__factory extends ContractFactory {
  constructor(...args: WriteOnceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WriteOnce> {
    return super.deploy(overrides || {}) as Promise<WriteOnce>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WriteOnce {
    return super.attach(address) as WriteOnce;
  }
  override connect(signer: Signer): WriteOnce__factory {
    return super.connect(signer) as WriteOnce__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WriteOnceInterface {
    return new utils.Interface(_abi) as WriteOnceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WriteOnce {
    return new Contract(address, _abi, signerOrProvider) as WriteOnce;
  }
}
