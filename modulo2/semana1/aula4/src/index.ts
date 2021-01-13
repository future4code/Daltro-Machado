import express, { Express, Request, Response } from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// EXERCÍCIO 1 - Criando o Endpoint GET ALL

app.get('/user', (req: Request, res: Response) => {
    const result = users.map(user => ({
        id: user.id,
        name: user.name
      }))
      
      res
        .status(200)
        .send(result)
    })
/* Letra a. Qual método HTTP você deve utilizar para isso?
    Método GET
   Letra b. Como você indicaria a **entidade** que está sendo manipulada?
    Entidade User
*/


// EXERCÍCIO 2 - Criando o Endpoint GET USER by TYPE

app.get("/user/search", (req: Request, res: Response) => {
    
    let errorCode: number = 400;

    try {

        const type: string = req.query.type as string;

        if (!type) {
            errorCode = 422;
            throw new Error("Tipo inválido. Por favor preencha corretamente");
        }

        let result = users.filter(
            user => user.type.includes(req.query.type as string)
            )
        

        if (result.length === 0) {
            errorCode = 422;
            throw new Error("Tipo inválido. Por favor preencha corretamente");
        }

        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});

/* Letra a. Como você passou os parâmetros de type para a requisição? Por quê?
    Os parâmetros foram passados através de QueryParams porque seria necessário buscar um termo específico que poderia aparecer em mais de um elemento da base de dados.
   Letra b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
    Foi utilizado o Enum para definir os tipos válidos para a chave type. Além disso foram feitas validações com estruturas de IF para garantir que mensagens de erro sejam mostradas caso o usuário não digite nada ou digite um tipo inválido.
*/




// EXERCÍCIO 3 - Criando o Endpoint GET SEARCH by name

app.get("/user/byname/search", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const name: string = req.query.name as string;

        if (!name) {
            errorCode = 422;
            throw new Error("Nome inválido. Por favor preencha corretamente");
        }

        const myUser = users.find(((u: user) => u.name.toLowerCase() === name.toLowerCase()));
        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const result = myUser;
        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }
});

/*
Letra a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
    Os parâmetros foram passados através de QueryParams porque seria necessário buscar um termo específico que não é necessariamente único.

Letra b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
    Feito.
*/

// EXERCÍCIO 4 - Criando o Endpoint ADD User

app.post("/user", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        if(!reqBody.age || !reqBody.email || !reqBody.type || !reqBody.name){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        users.push(reqBody);
    
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});

/*
Letra a. Mude o método do endpoint para PUT. O que mudou?
    Feito o endpoint com PUT abaixo. Para esta API nada mudou, aparentemente funcionou da mesma forma.
*/    
    app.put("/user", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        if(!reqBody.age || !reqBody.email || !reqBody.type || !reqBody.name){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        users.push(reqBody);
    
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});

/*
Letra b. Você considera o método PUT apropriado para esta transação? Por quê?
    Julgando por esta situação e pelo que fiz até agora, diria que sim. Funciona normalmente. Porém na aula o professor disse que existem diferenças entre os métodos em termos de registro de atividade.
*/



// EXERCÍCIO 5 - Criando o Endpoint PUT Edit
    
app.put("/user/:id", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {
        const reqBody: {id: number, name: string} = {
            id: Number(req.params.id),
            name: req.body.name
        }

        if(!reqBody.name){
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }

        if(isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("Id inválido");
        }

        const myUserIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)));

        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        users[myUserIndex].name = reqBody.name;
    
        res.status(200).send({message: "Usuário atualizado com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});


// EXERCÍCIO 6 - Criando o Endpoint PATCH Edit
    
app.patch("/user/:id", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {
        const reqBody: {id: number, name: string} = {
            id: Number(req.params.id),
            name: req.body.name
        }

        if(!reqBody.name){
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }

        if(isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("Id inválido");
        }

        const myUserIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)));

        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        users[myUserIndex].name = reqBody.name;
    
        res.status(200).send({message: "Usuário atualizado com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});

// EXERCÍCIO 7 - Criando o Endpoint DELETE

app.delete("/user/:id", (req:Request, res:Response)=>{
    let errorCode: number = 400
    
    try {
 
       if(!req.headers.authorization){
          errorCode = 401
          throw new Error("Usuário não autorizado!")
       }
 
       const userIndex: number = users.findIndex(
          (user) => user.id === Number(req.params.id)
       )
 
          if(userIndex === -1){
             errorCode = 404
             throw new Error("Usuário não encontrado")
          }
 
       users.splice(userIndex, 1)

       res.status(200).send({message: "Usuário apagado com sucesso!"})
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
 })


   
 // Criando o servidor  
 app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
 })
   


















