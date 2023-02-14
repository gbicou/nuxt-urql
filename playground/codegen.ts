import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.NUXT_PUBLIC_URQL_ENDPOINT ?? "https://countries.bicou.com/",
  documents: ["gql/**/*.graphql"],
  config: {
    useTypeImports: true,
    preResolveTypes: false,
  },
  generates: {
    "./gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./gql/types.ts": {
      plugins: ["typescript", "typescript-urql-graphcache"],
    },
    "./gql/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "types.ts",
        extension: ".ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
    "./gql/introspection.ts": {
      plugins: ["urql-introspection"],
      config: {
        includeScalars: true,
      },
    },
  },
  hooks: { afterOneFileWrite: ["eslint --fix", "prettier -w"] },
};

export default config;
