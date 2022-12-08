const options = {
    name: "Discente",
    menus: [
    {
      "name": "Disciplina",
      "links": [
        { name: "Cadastrar", url: "/discente/disciplinas/cadastrar" },
        { name: "Faltantes", url: "/discente/disciplinas/faltantes" },
        { name: "Histórico cursada", url: "/discente/disciplinas/historico-cursada" }
      ]
    },
    {
      "name": "Sugestão",
      "links": [
        { name: "Disciplina Opcional", url: "/discente/sugestao/opcionais" },
        { name: "Enriquecimento Curricular", url: "/discente/sugestao/enriquecimento-curricular" },
        { name: "pré-requisitos", url: "/discente/sugestao/enriquecimento-curricular" }
      ]
    },
    {
      "name": "Geração",
      "links": [
        { name: "Criar grade", url: "/discente/geracao/criar-grade" }
      ]
    }
    ]
  }
  
  export default options