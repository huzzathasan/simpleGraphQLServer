import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { renderGraphiQL } from "@graphql-yoga/render-graphiql";

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "World",
    },
  },
});

const yoga = createYoga({
  schema,
  renderGraphiQL,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info(`📢 Server Ready at http://localhost:4000`);
});
