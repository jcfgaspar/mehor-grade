import fetch from "node-fetch"
import { routes, headers as default_headers } from "@helpers/routes"

const { API_URL } = process.env

export default class Curso{
    headers = {}

    get = async codigo => {
        try {
            const path = routes.external.v1.cursos.get
            const headers = { ...this.headers, ...default_headers }
            const response =  await fetch(`${API_URL}${path}?codigo=${codigo}`,{ headers })
            return response
        } catch (_) {
            return null
        }
    }

    list = async _ => {
        try {
            const path = routes.external.v1.cursos.list
            const headers = { ...this.headers, ...default_headers }
            const response = await fetch(API_URL + path, { headers })
            return response
        } catch (_) {
            return null
        }
    }
    
    add = async payload => {
        try {
            const path = routes.external.v1.cursos.add
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify(payload)
            const config = { method: 'post', body , headers }
            const response = fetch(`${API_URL}${path}`, config)
            return response
        } catch (_) {
            return null
        }
    }
     
    remove = async codigo => {
        try {
            const path = routes.external.v1.cursos.delete
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify({ codigo })
            const config = { method: 'delete', body , headers }
            const response = fetch(`${API_URL}${path}/${codigo}`, config)
            return response
        } catch (error) {
            return null
        }
    }

    setHeaders = headers => this.headers = headers
}
