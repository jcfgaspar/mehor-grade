import fetch from "node-fetch"
import { routes, headers as default_headers } from "@helpers/routes"
const { API_URL } = process.env

const messageError = { message: "Method Not Allowed" }

export default async function handler(req, res)
{
    const { method, cookies, body } = req
  
    if('PATCH' != method)
        res.status(400).json(messageError)

    const path = "/v1/alunos/cadastrar-disciplina"
    const headers = { ...cookies, ...default_headers }
    const data = JSON.stringify(body)
    const config = { method: 'PATCH', body: data , headers }
    const response = await fetch(`${API_URL}${path}`, config)
    const json = await response.json()

    res.status(response.status).json(json)
}