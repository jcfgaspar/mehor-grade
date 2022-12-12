import Turmas from '@helpers/api/turmas'
import { RecomendacaoDefault } from '@helpers/api/recomendacoes'

export default async function handler(req, res) {
  return RecomendacaoDefault(req, res)
}