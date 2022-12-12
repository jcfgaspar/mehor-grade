import Turmas from '@helpers/api/turmas'
import { RecomendacaoOpcionais } from '@helpers/api/recomendacoes'

export default async function handler(req, res) {
  return RecomendacaoOpcionais(req, res)
}