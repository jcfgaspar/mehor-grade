import Disciplinas from '@helpers/api/disciplinas'

export default async function handler(req, res) {
  const { method, cookies, query: { codigo } } = req

  if('GET' != method)
      res.status(400).json({message: "Method Not Allowed"})

  const disciplina = new Disciplinas()
  disciplina.headers = cookies
  const response = await disciplina.get(codigo)
  const status = response.status
  const json = await response.json()
  res.status(status).json(json)
}