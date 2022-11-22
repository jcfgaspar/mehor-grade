import Usuarios from '@helpers/api/usuarios'

export default async function handler(req, res) {
    const { method, cookies, query } = req
    console.log(query)
    if('GET' != method)
        res.status(400).json({message: "Method Not Allowed"})

    const usuario = new Usuarios()
    usuario.headers = cookies
    usuario.query = new URLSearchParams(query)
    const response = await usuario.list()
    const status = response.status
    const json = await response.json()
    res.status(200).json({data: json})
}


  