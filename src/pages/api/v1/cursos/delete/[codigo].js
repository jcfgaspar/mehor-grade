import Curso from '@helpers/api/cursos'

export default async function handler(req, res) {
  const { query: { codigo }, method, cookies } = req

  if('DELETE' != method)
    return res.status(400).json({message: "Method Not Allowed"})

  const curso = new Curso()
  curso.headers = cookies 
  const response = await curso.remove(codigo)
  res.status(response.status).end()
}


  