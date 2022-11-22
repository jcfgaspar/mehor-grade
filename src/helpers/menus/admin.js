const options = {
    name: "Administrador",
    menus: [{
      "name": "Desvincular",
      "links": [
        { name: "equivalentes", url: "/admin/disciplinas/desvincular/equivalentes" },
        // { name: "matriz curricular", url: "/admin/disciplinas/desvincular/matriz-curricular" },
        { name: "pré-requisitos", url: "/admin/disciplinas/desvincular/pre-requisito"}
      ]
    },
    {
      "name": "Vincular",
      "links": [
        { name: "equivalentes", url: "/admin/disciplinas/vincular/equivalentes" },
        { name: "matriz curricular", url: "/admin/disciplinas/vincular/matriz-curricular" },
        { name: "pré-requisitos", url: "/admin/disciplinas/vincular/pre-requisito" }
      ]
    },
    {
      "name": "Turmas",
      "links": [
        { name: "Lista", url: "/admin/turmas/listar/" },
        { name: "Adicionar", url: "/admin/turmas/adicionar" },
        { name: "Remover", url: "/admin/turmas/remover" },
        // { name: "Adicionar horário aula", url: "/admin/disciplinas/turmas/adicionar-horario-aula" },
        // { name: "Remover horário aula", url: "/admin/disciplinas/turmas/remover-horario-aula"}
      ]
    },
    {
      "name": "Disciplinas",
      "links": [
        { name: "Lista", url: "/admin/disciplinas/listar/" },
        { name: "Adicionar", url: "/admin/disciplinas/adicionar" },
        { name: "Remover", url: "/admin/disciplinas/remover" }
      ]
    },
    {
      "name": "Cursos",
      "links": [
        { name: "Lista", url: "/admin/cursos/listar/" },
        { name: "Adicionar", url: "/admin/cursos/adicionar" },
        { name: "Remover", url: "/admin/cursos/remover" }
      ]
    },
    {
      "name": "Usuários",
      "links": [
        { name: "Listar", url: "/admin/usuarios/listar/" }
      ]
    }]
  }
  
  export default options