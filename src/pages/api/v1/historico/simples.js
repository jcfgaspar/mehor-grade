import { HistoricoSimples } from '@helpers/api/historico'

export default async function handler(req,res){
    return HistoricoSimples(req, res)
}