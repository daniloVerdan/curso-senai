import http from 'http';

let tarefas = [
    { id: 1, titleTarefa: "estudar", status: true },
    { id: 2, titleTarefa: "trabalhar", status: true },
    { id: 3, titleTarefa: "dormir", status: false },
]

async function getBody(req) {
    let body = ''
    for await (const chunk of req) body += chunk
    
    return body ? JSON.parse(body) : {}
}

const server = http.createServer(async(req, res) =>{
    res.setHeader('Content-Type', 'application/json; charser=utf-8')

    const [, route, idStr ] = req.url.split('/')

    // se for diferente da rota tarefas. retorna o codigo 404
    if (route !== 'tarefas') {
        return res.writeHead(404).end(JSON.stringify({erro: "not found"}))
    }

    //obtem todos as tarefas
    if (req.method === 'GET' && !idStr) {
        res.writeHead(200);
        return res.end(JSON.stringify(tarefas));
    }
    // obtem uma tarefa pelo id
    if (req.method === 'GET' && idStr) {
        const tarefa = tarefas.find(t => t.id === Number (idStr))
        if (!tarefa) {
            return res.writeHead(404).end(JSON.stringify({erro: "not found"}))
        }

        return res.writeHead(200).end(JSON.stringify({tarefa}))
    }
    // cria e envia uma tarefa nova
    if (req.method === 'POST') {
        const body =await getBody(req)
        const newTarefa = { id: Date.now(),...body }
        tarefas.push(newTarefa)

        return res.writeHead(404).end(JSON.stringify(newTarefa))
    }
    
    // atualiza ou substitui um registro existente, pode ser usado para colocar mais linhas no registro.
    if (req.method === 'PUT' && idStr) {
        const body = await getBody(req)
        const index = tarefas.findIndex(t => t.id === Number(idStr))
        if (index === -1) {
            return res.writeHead(404).end(JSON.stringify({erro: "not found"}))
    }

        tarefas[index] = { ...tarefas[index], ...body}

        return res.writeHead(200).end(JSON.stringify(tarefas[index]))
    }

    // deletar tarefas

    if (req.method === 'DELETE' && idStr) {
        tarefas = tarefas.filter(t => t.id !== Number (idStr))

        return res.writeHead(204).end(JSON.stringify({ Sucesso: "tarefa removida com sucesso!"}))
    }
});

server.listen(3000, () => {
    console.log(`API rodando nesse carai ${3000}`);
});