import fetch from "node-fetch"
import { routes, headers as default_headers } from "@helpers/routes"

const { API_URL } = process.env

export default class Disciplinas{
    headers = {}
    query = ""

    get = async codigo => {
        try {
            const path = routes.external.v1.disciplinas.get
            const headers = { ...this.headers, ...default_headers }
            const response =  await fetch(`${API_URL}${path}?codigo=${codigo}`,{ headers })
            return response
        } catch (_) {
            return null
        }
    }

    list = async _ => {
        try {
            const path = routes.external.v1.disciplinas.list + "?" +this.query
            const headers = { ...this.headers, ...default_headers }
            const response = await fetch(API_URL + path, { headers })
            return response
        } catch (_) {
            return null
        }
    }
    
    add = async payload => {
        try {
            const path = routes.external.v1.disciplinas.add
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify(payload)
            console.log(body)
            const config = { method: 'post', body , headers }
            const response = fetch(`${API_URL}${path}`, config)
            return response
        } catch (error) {
            return null
        }
    }
     
    remove = async codigo => {
        try {
            const path = routes.external.v1.disciplinas.delete
            const headers = { ...this.headers, ...default_headers }
            const config = { method: 'delete', headers }
            const response = fetch(`${API_URL}${path}/${codigo}`, config)
            return response
        } catch (error) {
            return null
        }
    }

    removeEquivalencia = async payload => {
        try {
            const path = routes.external.v1.disciplinas.add + "/equivalencia?" + this.query
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify(payload)
            const config = { method: 'PUT', body , headers }
            const response = fetch(`${API_URL}${path}`, config)
            return response
        } catch (error) {
            return null
        }
    }

    removePrerequisito = async payload => {
        try {
            const path = routes.external.v1.disciplinas.add + "/equivalencia?" + this.query
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify(payload)
            const config = { method: 'PUT', body , headers }
            const response = fetch(`${API_URL}${path}`, config)
            return response
        } catch (error) {
            return null
        }
    }

    addEquivalencia = async payload => {
        try {
            const path = routes.external.v1.disciplinas.add + "/equivalencia?" + this.query
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify(payload)
            const config = { method: 'PUT', body , headers }
            const response = fetch(`${API_URL}${path}`, config)
            return response
        } catch (error) {
            return null
        }
    }

    addPrerequisito = async payload => {
        try {
            const path = routes.external.v1.disciplinas.add + "/prerequisito?" + this.query
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify(payload)
            const config = { method: 'PUT', body , headers }
            const response = fetch(`${API_URL}${path}`, config)
            return response
        } catch (error) {
            return null
        }
    }

    register = async payload => {
        try {
            const path = routes.external.v1.disciplinas.register
            const headers = { ...this.headers, ...default_headers }
            const body = JSON.stringify(payload)
            const config = { method: 'post', body , headers }
            const response = fetch(`${API_URL}${path}`, config)
            return response
        } catch (error) {
            return null
        }
    }
     



    setHeaders = headers => this.headers = headers
}
