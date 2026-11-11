
import { v4 } from "uuid"
import { db } from "../database/connection.js"


// Listar todos os equipamentos
export async function getAllEquipamentos() {
    const [equipamentos] = await db.query(
        "SELECT * FROM equipamentos"
    )

    return equipamentos
}


// Buscar equipamento pelo ID
export async function getEquipamentoById(id) {
    const [equipamento] = await db.query(
        "SELECT * FROM equipamentos WHERE id = ?",
        [id]
    )

    return equipamento[0]
}


// Cadastrar equipamento
export async function postEquipamento(body) {
    const { nome, categoria, numero_de_serie, status } = body

    const id = v4()

    await db.query(
        `INSERT INTO equipamentos
        (id, nome, categoria, numero_de_serie, status)
        VALUES (?, ?, ?, ?, ?)`,
        [id, nome, categoria, numero_de_serie, status]
    )

    return {
        id,
        nome,
        categoria,
        numero_de_serie,
        status
    }
}


// Deletar equipamento
export async function deleteEquipamentoService(id) {
    const [result] = await db.query(
        "DELETE FROM equipamentos WHERE id = ?",
        [id]
    )

    if (result.affectedRows === 0) {
        return "Equipamento não encontrado!"
    }

    return "Equipamento deletado com sucesso!"
}


// Atualizar equipamento completo
export async function putEquipamentoService(id, body) {
    const { nome, categoria, numero_de_serie, status } = body

    const [result] = await db.query(
        `UPDATE equipamentos
        SET nome = ?, categoria = ?, numero_de_serie = ?, status = ?
        WHERE id = ?`,
        [nome, categoria, numero_de_serie, status, id]
    )

    if (result.affectedRows === 0) {
        return "Equipamento não encontrado!"
    }

    return "Equipamento atualizado com sucesso!"
}


// Atualizar equipamento parcialmente
export async function patchEquipamentoService(id, body) {
    const camposPermitidos = [
        "nome",
        "categoria",
        "numero_de_serie",
        "status"
    ]

    const campos = Object.keys(body).filter(
        campo => camposPermitidos.includes(campo)
    )

    if (campos.length === 0) {
        return "Nenhum campo válido informado!"
    }

    const valores = campos.map(campo => body[campo])

    const atualizacao = campos
        .map(campo => `${campo} = ?`)
        .join(", ")

    const [result] = await db.query(
        `UPDATE equipamentos SET ${atualizacao} WHERE id = ?`,
        [...valores, id]
    )

    if (result.affectedRows === 0) {
        return "Equipamento não encontrado!"
    }

    return "Equipamento atualizado com sucesso!"
}
