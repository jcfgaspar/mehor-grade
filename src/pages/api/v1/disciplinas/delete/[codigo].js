import Disciplinas from '@helpers/api/disciplinas'

export default async function handler(req, res) {
  const { method, cookies, query: { codigo } } = req

  if('DELETE' != method)
      res.status(400).json({message: "Method Not Allowed"})

  const disciplina = new Disciplinas()
  disciplina.headers = cookies
  const response = await disciplina.remove(codigo)
  console.log(response.status)
  res.status(response.status).end()
}