import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./db";
import { graphqlHTTP } from "express-graphql";
import { Waitlists } from "./db/model/Waitlist";

// import schema from "./Schema/schema";
import schema from "./Schema";

const app = express();
app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://casafrique.io'
// }));
app.use( "/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// sequelize.addModels([Waitlists]);
sequelize.sync({
  force: true
}).then()

// Define the API routes
// app.post("/create", async (req: Request, res: Response) => {
//   const { fullName, email, phoneNumber, company } = req.body;
//   const waitlist = await Waitlists.create({
//     fullName,
//     email,
//     phoneNumber,
//     company,
//   });
//   res.json(waitlist);
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
