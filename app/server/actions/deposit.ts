import {
  NotFoundError,
  ProtocolActions,
  decodeBytes32String,
} from "defi-presets"
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi"
import { ChainPrefix, sdks } from "../sdk"
import { docParams, queryBase, transactionsJson } from "../schema"
import { ActionHandler } from "../handle"
import { parseQuery } from "../parse"

export const registerDeposit = (
  registry: OpenAPIRegistry,
  chainPrefix: ChainPrefix,
  protocol: string
) => {
  const { schema } = sdks[chainPrefix] as any
  const querySchema = schema[protocol].deposit

  registry.registerPath({
    method: "get",
    path: `/${chainPrefix}:{mod}/{role}/allow/${protocol}/deposit`,
    summary: `Allow managing deposits to the target ${protocol} pools`,
    tags: [protocol],
    request: {
      params: docParams,
      query: querySchema,
    },

    responses: {
      200: {
        description: "Transactions for updating role permissions",
        content: {
          "application/json": {
            schema: transactionsJson,
          },
        },
      },
    },
  })
}

export const deposit: ActionHandler = async (query) => {
  const {
    mod: { chain, address },
    role,
    protocol,
  } = queryBase.parse(query)

  const sdk = sdks[chain]
  const { allow, schema } = sdk

  if (!(protocol in schema) || !(protocol in allow)) {
    throw new NotFoundError(`${protocol} is not supported on ${chain}`)
  }

  const allowDeposit = (allow as any)[protocol].deposit as
    | ProtocolActions["deposit"]
    | undefined
  const depositParams = (schema as any)[protocol].deposit as any

  if (!allowDeposit || !depositParams) {
    throw new NotFoundError(`${protocol} is not supported on ${chain}`)
  }

  const entries = allowDeposit(parseQuery(query, depositParams))

  const calls = await sdk.apply(role, entries, {
    address,
    mode: "extend",
  })

  return sdk.exportJson(address, calls, {
    name: `Extend permissions of "${decodeBytes32String(role)}" role`,
    description: `Allow managing deposits to the \`target\` ${protocol} pool`,
  })
}
