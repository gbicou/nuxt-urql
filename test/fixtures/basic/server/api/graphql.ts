import { createYoga } from "graphql-yoga";
import { schema } from "@bicou/nuxt-urql-sample-schema/schema";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema,
  landingPage: false,
  graphqlEndpoint: "/api/graphql",
});

export default defineEventHandler((event) => yoga.handle(event.node.req, event.node.res, event.context));
