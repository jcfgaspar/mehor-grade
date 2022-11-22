import Curso from '@helpers/api/cursos'

export default async function handler(req, res) {
    const { method, body, cookies} = req

    console.log("teste")
    if('POST' != method)
        return res.status(400).json({message: "Method Not Allowed"})

    if(!cookies.Authorization)
        return res.status(401).json({message: "Token was not found"})
        
    const curso = new Curso()
    curso.headers = cookies 

    const response = await curso.add(body)
    const { status } = response
    const json = await response.json()
    
    if('401' == status)
        return res.status(401).location("/visitante/login").end();

    res.status(status).json({data: json})
}


// fetch("/api/v1/cursos/add",{
//     method: "POST",
//     body: JSON.stringify({
//         nome: "Bacharelado em Sistemas de Informação 3",
//         codigo: "238",
//         quantidadeDePeriodos: 8,
//       }),
//       'Content-Type': 'application/json'
// }).then(r => r.json()).then(console.log)