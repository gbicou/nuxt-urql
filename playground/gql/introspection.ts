import type { IntrospectionQuery } from 'graphql'

export default {
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: null,
    subscriptionType: null,
    types: [
      {
        kind: 'SCALAR',
        name: 'Boolean',
      },
      {
        kind: 'OBJECT',
        name: 'Country',
        fields: [
          {
            name: 'alpha3',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'code',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'neighbours',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Country',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'numeric',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'tld',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Float',
      },
      {
        kind: 'SCALAR',
        name: 'ID',
      },
      {
        kind: 'SCALAR',
        name: 'Int',
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'countries',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Country',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'country',
            type: {
              kind: 'OBJECT',
              name: 'Country',
              ofType: null,
            },
            args: [
              {
                name: 'code',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null,
                  },
                },
              },
            ],
          },
          {
            name: 'version',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'String',
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery
