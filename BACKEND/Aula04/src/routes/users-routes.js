import { v4 } from 'uuid'

let users = [
    {
        id: "1",
        name: "Pedro",
        email: "pedrinho@yahoo.com",
        password: "123",
        createdAt: "2026-11-03"
    },
    {
        id: "2",
        name: "Filipe",
        email: "filipe@yahoo.com",
        password: "123",
        createdAt: "2026-11-03"
    },
    {
        id: "3",
        name: "Maria",
        email: "maria@gmail.com",
        password: "123",
        createdAt: "2026-11-03"
    },
    {
        id: "4",
        name: "João",
        email: "joao@gmail.com",
        password: "123",
        createdAt: "2026-11-03"
    },
    {
        id: "5",
        name: "Ana",
        email: "ana@hotmail.com",
        password: "123",
        createdAt: "2026-11-03"
    }
];

export async function usersRoutes(app) {
    
    // ROTA GET
    app.get('/', async (req, res) => {
        res.code(200).send(users)
    })

    // ROTA GET BY ID COM URL PARAMS
    app.get('//:id', async (req, res) => {
        const user = users.find(user => user.id === req.params.id)
        
        if(!user) {
            res.code(404).send({message: "Usuário não encontrado"})
        }
        res.code(200).send(user)
    })

    // ROTA GET COM URL QUERY localhost:3000/users-done?done=true
    app.get('/-done', async (req, res) => {

        const usersDone = users.filter(user => String(user.done) === req.query.done)

        res.code(200).send(usersDone)
    })

    // ROTA POST
    app.post('/', async (req, res) => {
        const newUser = {
            id: v4(),
            createdAt: new Date(),
            ...req.body
        }

        users.push(newUser)

        res.code(201).send({message: "Usuário criado com sucesso"})
    })


    // ROTA DELETE
    app.delete('//:id', async (req, res) => {
        users = users.filter(user => user.id !== req.params.id)
        
        res.code(202).send({message: "usuario deletado com sucesso"})
    })


    // PUT
    app.put('//:id', async (req, res) => {

        const body = req.body
        const index = users.findIndex(user => user.id === req.params.id)

        if (index === -1) {
            return { error: "Erro, usuário não encontrado" }
        }

        users[index] = { ...users[index], ...body }

        res.code(200).send({ message: "Usuário atualizado com sucesso"})
    })

    // ROTA PATCH - UPDATE DONE
    app.patch('//:id', async (req, res) => {

        const index = users.findIndex(user => user.id === req.params.id)

        if (index === -1) {
            return { error: "Erro, usuário não encontrado" }
        }

        users[index] = {
            ...users[index], ...req.body
        }

        res.code(200).send({ message: "Usuário atualizado com sucesso" })
    })
}