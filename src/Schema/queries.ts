import { GraphQLObjectType } from "graphql";
import {Waitlists} from "../db/model/Waitlist"
import { WaitlistType } from "./type";


export const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      Waitlists: {
        type: WaitlistType,
        args: {},
        resolve(parent, args) {
            console.log(parent);
            
            return Waitlists.findAll()
        },
      },
    },
});
    