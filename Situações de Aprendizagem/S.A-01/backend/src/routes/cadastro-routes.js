import {
    deleteEquipamento,
    listAllEquipamentos,
    listquipamentoById,
    patchEquipamento,
    putEquipamento,
    createEquipamento
} from '../controller/cadastro-controller.js'

export async function cadastrosRoutes(app) {
    // Listar todos os cadastros
    app.get('/', listAllEquipamentos)

    // Listar um cadastro
    app.get('/:id', listquipamentoById)

    // Cadastrar um cadastro
    app.post('/', createEquipamento)

    // Deletar um cadastro
    app.delete('/:id', deleteEquipamento)

    // Atualizar todo o cadastro
    app.put('/:id', putEquipamento)

    // Atualizar parcialmente um cadastro
    app.patch('/:id', patchEquipamento)
}