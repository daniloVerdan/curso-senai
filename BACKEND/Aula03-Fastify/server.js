import Fastify from 'fastify'
import { v4 } from 'uuid'

let tasks = [
    { id: "1", title: 'Estudar JavaScript', date: '10-10-27', done: false},
    { id: "2", title: 'Estudar Ingles', date: '11-11-27', done: false},
    { id: "3", title: 'Comprar Arroz', date: '12-12-27', done: true}
]

const app = Fastify( { logger: true } )


// ROTA GET
app.get('/tasks', async (req, res) => {
    res.code(200).send(tasks)
    
})

// ROTA GET BY ID COM URL PARAMS
app.get('/tasks/:id', async (req, res) => {
    const task = tasks.find(task => task.id === req.params.id)

    res.code(200).send(task)
})

// ROTA GET COM URL QUERY localhost:3000/tasks?done=true
app.get('/tasks-done', async (req, res) => {

    const tasksDone = tasks.filter(task => String(task.done) === req.query.done)

    res.code(200).send(tasksDone)
})

// ROTA DELETE
app.delete('/tasks/:id', async (req, res) => {
    tasks = tasks.filter(task => task.id !== req.params.id)

    res.code(202).send(tasks)
})

//ROTA POST
app.post('/tasks', async (req, res) => {
    const newTask = { 
        id: v4(),
        date: new Date(),
        done: false,
        ...req.body 
        }
    tasks.push(newTask)
    res.code(201).send(newTask)
})

// PUT
app.put('/tasks/:id', async (req, res) => {

    const body = req.body
    const index = tasks.findIndex(p => p.id === body.id)
    if (index === -1) {
        return { error: "Erro, task não encontrada"}
    }

    tasks[index] = { ...tasks[index], ...body }

    res.code(200).send(tasks[index])
})

// ROTA PATCH - UPDATE DONE

app.patch('/tasks/:id', async (req, res) => {

    const index = tasks.findIndex(p => p.id === req.params.id)
    if (index === -1) {
        return { error: "Erro, task não encontrada"}
    }

    tasks[index] = { ...tasks[index], "done": !tasks[index].done }

    res.code(200).send(tasks[index])

})

app.listen({ port : 3000}), (err, address) => {
    if(err) {
        app.log.error(err)
        process.exit(1)

    }
    console.log(`servidor rodando em http://localhost:${address}`)
}