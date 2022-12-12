import fetch from "node-fetch"
import { routes, headers as default_headers } from "@helpers/routes"

const { API_URL } = process.env


export async function HistoricoCompleto(req, res){
    const { cookies } = req
    const historico = new Historico()
    historico.headers = cookies
    const response = await historico.completo()
    const json = await response.json()
    res.status(200).json(json)
}

export async function HistoricoSimples(req, res){
    const { cookies } = req
    const historico = new Historico()
    historico.headers = cookies
    const response = await historico.simples()
    const json = await response.json()
    res.status(200).json(json)
}

export async function HistoricoFaltantesCompleto(req, res){
    const { cookies } = req
    const historico = new Historico()
    historico.headers = cookies
    const response = await historico.faltantes.completo()
    const json = await response.json()
    res.status(200).json(json)
}

export async function HistoricoFaltantesSimples(req, res){
    const { cookies } = req
    const historico = new Historico()
    historico.headers = cookies
    const response = await historico.faltantes.simples()
    const json = await response.json()
    res.status(200).json(json)
}


export default class Historico{
    headers = {}
    query = ""

    completo = async _ => {
        try {
            const path = routes.external.v1.historico.completo
            const headers = { ...this.headers, ...default_headers }
            const response =  await fetch(`${API_URL}${path}`,{ headers })
            return response
        } catch (_) {
            return null
        }
    }

    simples = async _ => {
        try {
            const path = routes.external.v1.historico.simples
            console.log(`${API_URL}/${path}`)
            const headers = { ...this.headers, ...default_headers }
            const response =  await fetch(`${API_URL}${path}`,{ headers })
            return response
        } catch (_) {
            return null
        }
    }

    faltantes = {

        completo: async _ => {
            try {
                const path = routes.external.v1.historico.faltantes.completo
                const headers = { ...this.headers, ...default_headers }
                const response =  await fetch(`${API_URL}${path}`,{ headers })
                return response
            } catch (_) {
                return null
            }
        },
    
        simples : async _ => {
            try {
                const path = routes.external.v1.historico.faltantes.simples
                const headers = { ...this.headers, ...default_headers }
                const response =  await fetch(`${API_URL}${path}`,{ headers })
                return response
            } catch (_) {
                return null
            }
        }
    }

    setHeaders = headers => this.headers = headers
}
