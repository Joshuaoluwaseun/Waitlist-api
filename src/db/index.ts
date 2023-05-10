import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import {Waitlists} from './model/Waitlist';

dotenv.config();
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USER as string,
  password:  process.env.DB_PASS as string,
  database: process.env.DB_NAME as string,
  models: [Waitlists]
});

// sequelize.addModels([Waitlists]);

sequelize.authenticate().then(
  () => console.log('Connection has been established successfully.')
).catch((error: Error) => 
console.error('Unable to connect to the database:', error)
)
export default sequelize;
