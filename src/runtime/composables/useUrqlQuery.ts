import type { AnyVariables, DocumentInput, OperationContext, OperationResult, OperationResultSource } from "@urql/core";
import { useUrqlClient } from "./useUrqlClient";
import { sourceRef } from "#urql/wonka-utils";
import { type Ref } from "vue";

/**
 *
 */
export function useUrqlQuery<Data = any, Variables extends AnyVariables = AnyVariables>(
  query: DocumentInput<Data, Variables>,
  variables: Variables,
  context?: Partial<OperationContext>,
): Ref<OperationResult<Data, Variables> | undefined> {
  const client = useUrqlClient();
  return sourceRef(client.query(query, variables, context));
}
