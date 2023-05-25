import { PresetAllowEntry } from "zodiac-roles-sdk/index"

export type Action = "deposit" | "borrow" | "stake" | "claim" | "swap"

export enum Chains {
  eth = "eth",
  gor = "gor",
}

// These types define the common interface for actions across all protocols
export type ProtocolActions = {
  deposit?: (options: { target: any }) => PresetAllowEntry[]

  borrow?: (options: {}) => PresetAllowEntry[]

  stake?: (options: {}) => PresetAllowEntry[]

  claim?: (options: {}) => PresetAllowEntry[]

  swap?: (options: {
    sell?: any[]
    buy?: any[]
    pools?: any[]
  }) => PresetAllowEntry[]
}
