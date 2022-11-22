import Curso from '@helpers/api/cursos'

export default async function handler(req, res) {
    const { method, cookies } = req

    if('GET' != method)
        return res.status(400).json({message: "Method Not Allowed"})

    if(!cookies.Authorization)
        return res.status(401).json({message: "Token was not found"})

    const curso = new Curso()
    curso.headers = cookies
    const response = await curso.list()

    if('401' == response.status)
        return res.status(401).json({message: "Unauthorized"})
        
    const json = await response.json()
    res.status(response.status).json({data: json})
}


  