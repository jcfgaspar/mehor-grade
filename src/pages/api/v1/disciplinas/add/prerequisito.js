import Disciplinas from '@helpers/api/disciplinas'

export default async function handler(req, res) {
  const { method, cookies, body, query } = req
  if('PUT' != method)
      return res.status(405).json({message: "Method Not Allowed"})

  const disciplina = new Disciplinas()
  disciplina.headers = cookies
  disciplina.query = new URLSearchParams(query)
  const response = await disciplina.addPrerequisito(body)
  console.log(response)
//   const json = await response.json()

  res.status(response.status).json("json")
}