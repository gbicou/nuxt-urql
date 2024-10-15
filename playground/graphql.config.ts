import type { IGraphQLConfig } from 'graphql-config'
import * as dotenv from 'dotenv'

dotenv.config()

const config: IGraphQLConfig = {
  projects: {
    webstorm: {
      schema: './gql/schema.graphql',
      documents: './gql/**/*.graphql',
      extensions: {
        endpoints: {
          dev: 'http://localhost:4000/',
          live: 'https://countries.bicou.com/',
        },
      },
    },
    default: {
      schema: process.env.NUXT_PUBLIC_URQL_ENDPOINT ?? 'https://countries.bicou.com/',
      documents: './gql/**/*.graphql',
      extensions: {
        codegen: {
          config: {
            useTypeImports: true,
            preResolveTypes: false,
          },
          generates: {
            './gql/schema.graphql': {
              plugins: ['schema-ast'],
            },
            './gql/types.ts': {
              plugins: ['typescript', 'typescript-urql-graphcache'],
            },
            './gql/': {
              preset: 'near-operation-file',
              presetConfig: {
                baseTypesPath: 'types.ts',
                extension: '.ts',
              },
              plugins: ['typescript-operations', 'typed-document-node'],
            },
            './gql/introspection.ts': {
              plugins: ['urql-introspection'],
              config: {
                includeScalars: true,
              },
            },
          },
          hooks: { afterOneFileWrite: ['eslint --fix'] },
        },
      },
    },
  },
}

export default config
