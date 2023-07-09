/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestCustomChecker,
  TestCustomCheckerInterface,
} from "../../../contracts/test/TestCustomChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "location",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "bytes12",
        name: "extra",
        type: "bytes12",
      },
    ],
    name: "check",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "reason",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610210806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063416ad87a14610030575b600080fd5b61004361003e3660046100bb565b61005e565b60408051921515835260208301919091520160405180910390f35b6000808087868861006f888361016b565b9261007c93929190610192565b610085916101bc565b9050606481111561009e575060019150600090506100b0565b5060009150506001600160a01b031982165b965096945050505050565b60008060008060008060a087890312156100d457600080fd5b86359550602087013567ffffffffffffffff808211156100f357600080fd5b818901915089601f83011261010757600080fd5b81358181111561011657600080fd5b8a602082850101111561012857600080fd5b602092909201965090945050604087013592506060870135915060808701356001600160a01b03198116811461015d57600080fd5b809150509295509295509295565b8082018082111561018c57634e487b7160e01b600052601160045260246000fd5b92915050565b600080858511156101a257600080fd5b838611156101af57600080fd5b5050820193919092039150565b8035602083101561018c57600019602084900360031b1b169291505056fea264697066735822122014725232ea4e404db6e7d6d01cc17c3c906c03985d0810d0ff71f0f3f23c2c4264736f6c63430008110033";

type TestCustomCheckerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestCustomCheckerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestCustomChecker__factory extends ContractFactory {
  constructor(...args: TestCustomCheckerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestCustomChecker> {
    return super.deploy(overrides || {}) as Promise<TestCustomChecker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestCustomChecker {
    return super.attach(address) as TestCustomChecker;
  }
  override connect(signer: Signer): TestCustomChecker__factory {
    return super.connect(signer) as TestCustomChecker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCustomCheckerInterface {
    return new utils.Interface(_abi) as TestCustomCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCustomChecker {
    return new Contract(address, _abi, signerOrProvider) as TestCustomChecker;
  }
}