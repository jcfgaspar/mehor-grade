import Disciplinas from '@helpers/api/disciplinas'

export default async function handler(req, res) {
  const { method, cookies, body } = req
//   console.log("bateu")
  if('POST' != method)
      return res.status(405).json({message: "Method Not Allowed"})
// console.log("foi")

  const disciplina = new Disciplinas()
  disciplina.headers = cookies
  const response = await disciplina.register(body)
  const json = await response.json()
  res.status(response.status).json(json)
}