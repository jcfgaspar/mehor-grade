import { HistoricoFaltantesSimples } from '@helpers/api/historico'

export default async function handler(req,res){
    return HistoricoFaltantesSimples(req, res)
}