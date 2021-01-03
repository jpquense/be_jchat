const accounts = [
  {
    id: "1",
    email: "jchat@jchat.com",
  },
];

const resolvers = {
  Account: {
    __resolveReference(reference, context, info) {
      return accounts.find((account) => account.id === reference.id);
    },
  },

  Query: {
    viewer(parent, args, { user }, info) {
      console.log(user);
      return accounts[0];
    },
  },
};

export default resolvers;
