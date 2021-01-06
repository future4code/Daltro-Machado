import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

// Criando o Enpoint 1 (GET ALL)

app.get('/countries/all', (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
      
      res
        .status(200)
        .send(result)
    })


// Criando o Enpoint 3 (GET SEARCH)

    app.get("/countries/search", (req: Request, res: Response) => {

      let result: country[] = countries
  
      if ((req.query.name) || (req.query.capital) || (req.query.continent)) {
         
      if (req.query.name) {
          result = result.filter(
          country => country.name.includes(req.query.name as string)
          )
      }
  
      if (req.query.capital) {
          result = result.filter(
          country => country.capital.includes(req.query.capital as string)
          )
      }
  
      if (req.query.continent) {
          result = result.filter(
          country => country.continent.includes(req.query.continent as string)
         )
      }
        
      res.status(200).send(result)

   } else {
      res.status(400).send("Invalid Parameters")
   }
  })


// Criando o Enpoint 2 (GET ID)

app.get('/countries/:id', (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
     )
     
     if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }
    })


// Criando o Endpoint 4 (PUT Edit)
    
   app.put('/countries/edit/:id', (req: Request, res: Response)=>{
      
      if (req.params.id) {
         const id: string = req.params.id;
         const name: string = req.body.name;
         const capital: string = req.body.capital;




         
      } else {
         res.status(400).send("Invalid Parameters")
      }

   });


   app.delete("/countries/:id", (req:Request, res:Response)=>{
      let errorCode: number = 400
      //inicio de um sonho
      try {
   
         if(!req.headers.authorization){
            errorCode = 401
            throw new Error()
         }
   
         const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
         )
   
            if(countryIndex === -1){
               errorCode = 404
               throw new Error()
            }
   
         countries.splice(countryIndex, 1)
   //deu tudo certo
         res.status(200).end()
      } catch (error) {
         //deu tudo errado
         console.log(error)
         res.status(errorCode).end()
      }
   })









// aula


app.get('/test/:number', (req: Request, res: Response) => {
    if(isNaN(Number(req.params.number))){
        res.send("").status(422);
    }
    res.send(
      `Seu número da sorte é ${Number(req.params.number) + 3}!
    `)
  })
 
 

 
 app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
 })
   