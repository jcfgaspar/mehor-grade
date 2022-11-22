import Turmas from '@helpers/api/turmas'

export default async function handler(req, res) {
  const { method, cookies, query: { codigo } } = req
  console.log(method)
  if('DELETE' != method)
      return res.status(400).json({message: "Method Not Allowed"})

  const turma = new Turmas()
  turma.headers = cookies
  const response = await turma.remove(codigo)
  console.log(response)  
  res.status(response.status).end()
}