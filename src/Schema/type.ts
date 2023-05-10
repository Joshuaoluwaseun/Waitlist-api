import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
  } from "graphql";

export const WaitlistType = new GraphQLObjectType({
    name: "Waitlist",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        company: { type: GraphQLString },
    }),
});