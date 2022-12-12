import Turmas from '@helpers/api/turmas'
import { RecomendacaoEnriquecimento } from '@helpers/api/recomendacoes'

export default async function handler(req, res) {
  return RecomendacaoEnriquecimento(req, res)
}