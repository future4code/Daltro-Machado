import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from './endpoints/createUser'
import userLogin from './endpoints/userLogin'
import getUserById from './endpoints/getUserById'
import removeUserById from './endpoints/removeUserById'
import getUser from './endpoints/getUser'


dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});


const app = express();
app.use(express.json());


app.post('/signup', createUser)
app.post('/login', userLogin)
app.get('/user/profile', getUserById)
app.delete('/user/:id', removeUserById)
app.get('/user', getUser)


const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor funcionando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar servidor.`);
  }
});