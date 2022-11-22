import Turmas from '@helpers/api/turmas'

export default async function handler(req, res) {
  const { method, cookies, query: { codigo } } = req

  if('GET' != method)
      res.status(400).json({message: "Method Not Allowed"})

  const turma = new Turmas()
  turma.headers = cookies
  const response = await turma.get(codigo)
  const status = response.status
  const json = await response.json()
  console.log(json)
  res.status(200).json(json)
}