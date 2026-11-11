import {
    deleteEquipamentoService,
    getAllEquipamentos,
    getEquipamentoById,
    patchEquipamentoService,
    postEquipamento,
    putEquipamentoService
} from "../services/cadastro-services.js"


export async function listAllEquipamentos(request, response) {
    const cadastros = await getAllEquipamentos()

    return response.code(200).send(cadastros)
}


export async function listquipamentoById(request, response) {
    const cadastro = await getEquipamentoById(request.params.id)

    if (!cadastro) {
        return response.code(404).send({
            message: "Cadastro not found!"
        })
    }

    return response.code(200).send(cadastro)
}


export async function createEquipamento(request, response) {
    const novoCadastro = await postEquipamento(request.body)

    return response.code(201).send(novoCadastro)
}


export async function deleteEquipamento(request, response) {
    const message = await deleteEquipamentoService(request.params.id)

    return response.code(202).send({ message: message })
}


export async function putEquipamento(request, response) {
    const message = await putEquipamentoService(request.params.id, request.body)

    return response.code(200).send({ message: message })
}


export async function patchEquipamento(request, response) {
    const message = await patchEquipamentoService(request.params.id, request.body)

    return response.code(200).send({ message: message })
}