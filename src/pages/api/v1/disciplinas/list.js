import Disciplinas from '@helpers/api/disciplinas'

export default async function handler(req, res) {
    const { method, cookies, query } = req
    console.log(query)
    if('GET' != method)
        res.status(400).json({message: "Method Not Allowed"})

    const disciplina = new Disciplinas()
    disciplina.headers = cookies
    disciplina.query = new URLSearchParams(query)
    const response = await disciplina.list()
    const status = response.status
    const json = await response.json()
    res.status(200).json({data: json})
}


  