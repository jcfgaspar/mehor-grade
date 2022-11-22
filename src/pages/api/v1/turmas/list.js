import Turmas from '@helpers/api/turmas'

export default async function handler(req, res) {
    const { method, cookies, query } = req
    console.log(query)
    if('GET' != method)
        res.status(400).json({message: "Method Not Allowed"})

    const turma = new Turmas()
    turma.headers = cookies
    turma.query = new URLSearchParams(query)
    const response = await turma.list()
    const status = response.status
    const json = await response.json()
    res.status(200).json({data: json})
}


  