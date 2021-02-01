import express from 'express'
import cors from 'cors'
import { signup, login, getAll, deleteUserById } from './controller/userController'

const app = express()
app.use(express.json())
app.use(cors())

app.put('/signup', signup)
app.post('/login', login)
app.get('/all', getAll)
app.delete('/:id', deleteUserById)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})