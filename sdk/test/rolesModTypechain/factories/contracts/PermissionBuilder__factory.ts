/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  PermissionBuilder,
  PermissionBuilderInterface,
} from "../../contracts/PermissionBuilder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "AlreadyDisabledModule",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "AlreadyEnabledModule",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "InvalidModule",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guard_",
        type: "address",
      },
    ],
    name: "NotIERC165Compliant",
    type: "error",
  },
  {
    inputs: [],
    name: "SetupModulesAlreadyCalled",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsuitableMaxBalanceForAllowance",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "enum ExecutionOptions",
        name: "options",
        type: "uint8",
      },
    ],
    name: "AllowFunction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ExecutionOptions",
        name: "options",
        type: "uint8",
      },
    ],
    name: "AllowTarget",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousAvatar",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAvatar",
        type: "address",
      },
    ],
    name: "AvatarSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "guard",
        type: "address",
      },
    ],
    name: "ChangedGuard",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "RevokeFunction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
    ],
    name: "RevokeTarget",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "parent",
            type: "uint8",
          },
          {
            internalType: "enum ParameterType",
            name: "paramType",
            type: "uint8",
          },
          {
            internalType: "enum Operator",
            name: "operator",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "compValue",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct ConditionFlat[]",
        name: "conditions",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "enum ExecutionOptions",
        name: "options",
        type: "uint8",
      },
    ],
    name: "ScopeFunction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
    ],
    name: "ScopeTarget",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "allowanceKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "balance",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "maxBalance",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "refillAmount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "refillInterval",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "refillTimestamp",
        type: "uint64",
      },
    ],
    name: "SetAllowance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousTarget",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newTarget",
        type: "address",
      },
    ],
    name: "TargetSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "enum ExecutionOptions",
        name: "options",
        type: "uint8",
      },
    ],
    name: "allowFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "enum ExecutionOptions",
        name: "options",
        type: "uint8",
      },
    ],
    name: "allowTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "allowances",
    outputs: [
      {
        internalType: "uint128",
        name: "refillAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "maxBalance",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "refillInterval",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "balance",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "refillTimestamp",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "avatar",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getGuard",
    outputs: [
      {
        internalType: "address",
        name: "_guard",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guard",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "revokeFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
    ],
    name: "revokeTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "parent",
            type: "uint8",
          },
          {
            internalType: "enum ParameterType",
            name: "paramType",
            type: "uint8",
          },
          {
            internalType: "enum Operator",
            name: "operator",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "compValue",
            type: "bytes",
          },
        ],
        internalType: "struct ConditionFlat[]",
        name: "conditions",
        type: "tuple[]",
      },
      {
        internalType: "enum ExecutionOptions",
        name: "options",
        type: "uint8",
      },
    ],
    name: "scopeFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
    ],
    name: "scopeTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint128",
        name: "balance",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "maxBalance",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "refillAmount",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "refillInterval",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "refillTimestamp",
        type: "uint64",
      },
    ],
    name: "setAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_avatar",
        type: "address",
      },
    ],
    name: "setAvatar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_guard",
        type: "address",
      },
    ],
    name: "setGuard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
    ],
    name: "setTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initializeParams",
        type: "bytes",
      },
    ],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "target",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PermissionBuilder__factory {
  static readonly abi = _abi;
  static createInterface(): PermissionBuilderInterface {
    return new utils.Interface(_abi) as PermissionBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermissionBuilder {
    return new Contract(address, _abi, signerOrProvider) as PermissionBuilder;
  }
}
