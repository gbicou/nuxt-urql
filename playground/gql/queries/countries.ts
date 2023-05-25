import type * as Types from "../types";

import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type CountriesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CountriesQuery = { __typename?: "Query" } & {
  countries: Array<{ __typename: "Country" } & Pick<Types.Country, "code" | "name">>;
};

export type CountryByCodeQueryVariables = Types.Exact<{
  code: Types.Scalars["ID"]["input"];
}>;

export type CountryByCodeQuery = { __typename?: "Query" } & {
  country?: Types.Maybe<{ __typename: "Country" } & Pick<Types.Country, "code" | "name" | "alpha3" | "numeric">>;
};

export const CountriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Countries" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "countries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CountriesQuery, CountriesQueryVariables>;
export const CountryByCodeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CountryByCode" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "country" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "alpha3" } },
                { kind: "Field", name: { kind: "Name", value: "numeric" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CountryByCodeQuery, CountryByCodeQueryVariables>;
