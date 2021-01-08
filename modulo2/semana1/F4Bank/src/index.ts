import express, { Express, Request, Response } from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    cpf: string,
    birth: string,
    balance: number,
    expenses: transaction[]    
}

type transaction = {
    value: number,
    date: string,
    description: string
}

let users: user[] = [
    {
        id: 1,
        name: "Daltro Machado",
        cpf: "03477634278",
        birth: "11/04/1975",
        balance: 2950.45,
        expenses: [
            {value: 60, date: "08/01/2021", description: "Recarga"},
            {value: 390, date: "08/01/2021", description: "Conta de Luz"}
        ]
    },
    {
        id: 2,
        name: "Julia Gontijo",
        cpf: "04475234239",
        birth: "01/05/2001",
        balance: 950,
        expenses: [
            {value: 40, date: "08/01/2021", description: "Google Play"}
        ]
    },
    {
        id: 3,
        name: "Luciana Simas",
        cpf: "03334427777",
        birth: "08/04/1973",
        balance: 6950,
        expenses: [
            {value: 60, date: "08/01/2021", description: "Recarga"},
            {value: 190, date: "08/01/2021", description: "Conta de Telefone"},
            {value: 240, date: "08/01/2021", description: "Roupas"}
        ]
    },
    {
        id: 4,
        name: "Ana Carolina",
        cpf: "01256634788",
        birth: "17/10/1999",
        balance: 50.45,
        expenses: [
            {value: 30, date: "08/01/2021", description: "Almoço"}
        ]
    }
]

// Criando endpoint GET ALL

app.get("/user", (req: Request, res: Response) => {
    const result = users.map(user => ({
        id: user.id,
        name: user.name,
        cpf: user.cpf
      }))
      
      res
        .status(200)
        .send(result)
    })
   
// Criando endpoint para Exibir Saldo

app.get("/user/:cpf", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        if(!req.params.cpf){
            errorCode = 422;
            throw new Error("CPF inválido. Preencha corretamente.");
        }

        const myUser = users.find(((u: user) => u.cpf === req.params.cpf));
        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const result = {
            id: myUser.id,
            name: myUser.name,
            cpf: myUser.cpf,
            Saldo: myUser.balance
        }

        res.status(200).send(result);

        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});


// Criando um usuário/conta

app.post("/user", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        const yearNow: number = new Date().getFullYear()
        const monthNow: number = new Date().getMonth() + 1
        const dayNow: number = new Date().getDate()
        const birth: string = req.body.birth
        const birthDay: number = Number(birth.substring(0, 2))
        const birthMonth: number = Number(birth.substring(3, 5))
        const birthYear: number = Number(birth.substring(6, 10))
        
              
        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            cpf: req.body.cpf,
            birth: req.body.birth,
            balance: 0,
            expenses: []
        }

        if(!reqBody.cpf || !reqBody.birth || !reqBody.name){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        // Valida se CPF já existe.
        const myUserIndex = users.findIndex(((u: user) => u.cpf === reqBody.cpf));

        if (myUserIndex > -1) {
            errorCode = 409;
            throw new Error("Número de CPF já existente!");
        }


        // Valida a idade mínima de 18 anos         
        if ((yearNow - birthYear) < 18) {
            errorCode = 401;
            throw new Error("Idade insuficiente para abertura de conta!");
        } else {
            if ((yearNow - birthYear) === 18) {
                if (monthNow < birthMonth) {
                    errorCode = 401;
                    throw new Error("Idade insuficiente para abertura de conta!");
                } else {
                    if (monthNow === birthMonth) {
                        if (dayNow < birthDay) {
                            errorCode = 401;
                            throw new Error("Idade insuficiente para abertura de conta!");
                        }
                    }
                }
            }
        }


        users.push(reqBody);
    
        res.status(200).send({message: "Conta Criada com sucesso! Bem vindo ao F4Bank!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});

// Criando Endpoint para Adicionar valor à conta

app.put("/user", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {
        const reqBody: {name: string, cpf: string, balance: number} = {
            name: req.body.name,
            cpf: req.body.cpf,
            balance: Number(req.body.balance)
        }

        if(!reqBody.name){
            errorCode = 422;
            throw new Error("Nome inválido. Preencha corretamente.");
        }

        if(!reqBody.cpf) {
            errorCode = 422;
            throw new Error("CPF inválido");
        }

        if(isNaN(Number(reqBody.balance))) {
            errorCode = 422;
            throw new Error("Valor inválido");
        }

        const myUserIndex = users.findIndex(((u: user) => u.cpf === reqBody.cpf));

        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        if (users[myUserIndex].name !== reqBody.name) {
            errorCode = 404;
            throw new Error("Dados Divergentes! Verifique o nome ou CPF informados.");
        }

        users[myUserIndex].balance += reqBody.balance;
    
        res.status(200).send({message: "Saldo Adicionado com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});



 // Criando o servidor  
 app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
 })