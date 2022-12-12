import { HistoricoCompleto } from '@helpers/api/historico'

export default async function handler(req,res){
    return HistoricoCompleto(req, res)
}