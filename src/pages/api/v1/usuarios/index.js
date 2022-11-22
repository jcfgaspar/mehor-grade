import Usuarios from '@helpers/api/usuarios'

export default async function handler(req, res) {
  const { method, cookies, query: { codigo }, body} = req
  const usuario = new Usuarios()

  if('GET' == method){
    usuario.headers = cookies
    const response = await usuario.get(codigo)
    const status = response.status
    const json = await response.json()
    return res.status(status).json(json)
  }
  
  
  if('POST' == method){
    const response = await usuario.add(body)
    const status = response.status
    let json = {}

    if(response.bodyUsed) {
      json = await response.json()
      console.log(json)
    }
    console.log(status)
    console.log(response)

    return res.status(status).redirect("/visitante/login").end()
  }
  
  return res.status(400).json({message: "Method Not Allowed"})
}