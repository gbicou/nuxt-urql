/*
import { addMocksToSchema } from "@graphql-tools/mock";
import { buildClientSchema } from "graphql";
import introspection from "../../../playground/gql/introspection";

// build schema from playground introspection
const schema = buildClientSchema(introspection);

// mock schema
export const schemaWithMocks = addMocksToSchema({
  schema,
  resolvers: (store) => ({
    Query: {
      country: (_, { code }) => store.get("Country", code),
    },
  }),
});
*/
