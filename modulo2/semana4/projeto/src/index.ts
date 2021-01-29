import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getUserByToken from './endpoints/getUserByToken'
import getUserById from './endpoints/getUserById'
import createRecipe from './endpoints/createRecipe'
import getRecipeById from './endpoints/getRecipeById'
import followUser from './endpoints/followUser'
import unFollowUser from './endpoints/unFollowUser'



dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.post('/signup', createUser)
app.post("/login", login)
app.get('/user/:id', getUserById)
app.get('/user/profile', getUserByToken)
app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipeById)
app.post('/user/follow', followUser)
app.post('/user/unfollow', unFollowUser)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

