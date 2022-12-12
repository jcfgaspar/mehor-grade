import fetch from "node-fetch"
import { routes, headers as default_headers } from "@helpers/routes"

const { API_URL } = process.env

export async function RecomendacaoDefault(req, res){
    const { cookies, query } = req
    const recomendacao = new Recomendacao()
    recomendacao.headers = cookies
    recomendacao.query = "?" + new URLSearchParams(query).toString()
    console.log(recomendacao)
    const response = await recomendacao.default()
    const json = await response.json()
    res.status(200).json(json)
}

export async function RecomendacaoEnriquecimento(req, res){
    const { cookies, query } = req
    const recomendacao = new Recomendacao()
    recomendacao.headers = cookies
    recomendacao.query = "?" + new URLSearchParams(query).toString()
    const response = await recomendacao.enriquecimento()
    console.log(response)
    const json = await response.json()
    res.status(200).json(json)
}

export async function RecomendacaoOpcionais(req, res){
    const { cookies, query } = req
    const recomendacao = new Recomendacao()
    recomendacao.headers = cookies
    recomendacao.query = "?" + new URLSearchParams(query).toString()
    const response = await recomendacao.opcionais()
    const json = await response.json()
    res.status(200).json(json)
}


export default class Recomendacao{
    headers = {}
    query = ""

    default = async _ => {
        try {
            const path = routes.external.v1.recomendacoes.default
            const headers = { ...this.headers, ...default_headers }
            const response =  await fetch(`${API_URL}${path}${this.query}`,{ headers, method:"PATCH"})
            return response
        } catch (_) {
            return null
        }
    }

    enriquecimento = async _ => {
        try {
            const path = routes.external.v1.recomendacoes.enriquecimento
            console.log(`${API_URL}${path}`)
            const headers = { ...this.headers, ...default_headers }
            console.log(`${API_URL}${path}${this.query}`)
            const response =  await fetch(`${API_URL}${path}${this.query}`,{ headers })
            return response
        } catch (_) {
            return null
        }
    }

    opcionais = async _ => {
        try {
            const path = routes.external.v1.recomendacoes.opcionais
            console.log(`${API_URL}${path}`)
            const headers = { ...this.headers, ...default_headers }
            console.log(`${API_URL}${path}${this.query}`)
            const response =  await fetch(`${API_URL}${path}${this.query}`,{ headers })
            return response
        } catch (_) {
            return null
        }
    }

    setHeaders = headers => this.headers = headers
}
