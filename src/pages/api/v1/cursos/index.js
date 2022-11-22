import curso from '@helpers/api/cursos'


export default async function handler(req, res) {
  const { query: { codigo }, method } = req

  if('GET' != method)
    res.status(400).json({message: "Method Not Allowed"})

  if(!codigo)
    res.status(400).json({message: "Bad Request"})

  const response = await curso.get(codigo)
  
  response?.data
    ? res.status(200).json({data: response.data})
    : res.status(404).json({msg: "Not Found"})
}


  