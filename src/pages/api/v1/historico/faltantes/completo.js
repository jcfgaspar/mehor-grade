import { HistoricoFaltantesCompleto } from '@helpers/api/historico'

export default async function handler(req,res){
    return HistoricoFaltantesCompleto(req, res)
}