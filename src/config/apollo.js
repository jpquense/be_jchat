import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server-express";

const gateway = new ApolloGateway({
  serviceList: [{ name: "accounts", url: process.env.ACCOUNTS_SERVICE_URL }],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  context: ({ req }) => {
    const user = req.user || null;
    return user;
  },
});

export default server;
