import type * as Types from "../types";

import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type VersionQueryVariables = Types.Exact<{ [key: string]: never }>;

export type VersionQuery = { __typename?: "Query" } & Pick<Types.Query, "version">;

export const VersionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "version" },
      selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "version" } }] },
    },
  ],
} as unknown as DocumentNode<VersionQuery, VersionQueryVariables>;
