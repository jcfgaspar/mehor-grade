import Turmas from '@helpers/api/turmas'

export default async function handler(req, res) {
  const { method, cookies, body } = req
  if('POST' != method)
    res.status(400).json({message: "Method Not Allowed"})
  
  console.log(body)
  const turma = new Turmas()
  turma.headers = cookies
  const response = await turma.add(body)
  const json = await response.json()
  console.log(json)
  res.status(response.status).json(json)
}