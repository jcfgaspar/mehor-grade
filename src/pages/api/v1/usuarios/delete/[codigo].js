import Usuarios from '@helpers/api/usuarios'

export default async function handler(req, res) {
  const { method, cookies, query: { codigo } } = req

  if('GET' != method)
      res.status(400).json({message: "Method Not Allowed"})

  const usuario = new Usuarios()
  usuario.headers = cookies
  const response = await usuario.remove(codigo)
 
  if(response.status == 200){
    const json = await response.json()
    return res.status(200).json(json)
  }
  
  res.status(response.status).end()
}