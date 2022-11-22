import Disciplinas from '@helpers/api/disciplinas'

export default async function handler(req, res) {
  const { method, cookies, body } = req

  if('POST' != method)
      res.status(400).json({message: "Method Not Allowed"})

  const disciplina = new Disciplinas()
  disciplina.headers = cookies
  const response = await disciplina.add(body)

  if(response?.status == 200){
      const json = await response.json()
      return res.status(200).json(json)
  }
  res.status(response.status).end()
}