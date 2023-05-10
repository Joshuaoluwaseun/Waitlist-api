import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
  } from "graphql";
  import { WaitlistType } from "./type";
  
  import { v4 as uuidv4 } from "uuid"; 
  import {Waitlists} from "../db/model/Waitlist"

export const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      AddWaitList: {
        type: WaitlistType,
        args: {
          id: {type: GraphQLID},
          firstName: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: new GraphQLNonNull(GraphQLString) },
          phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
          company: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
            let { firstName, email, phoneNumber, company } = args;
  
            const emailExist = Waitlists.findOne({
              where: {
                email,
              },
            });
  
            let newPerson = Waitlists.create({
              id: String(uuidv4()),
              firstName,
              email,
              phoneNumber,
              company,
            });
  
            if (!newPerson) return;
  
            return newPerson;
        },
      },
    },
});
