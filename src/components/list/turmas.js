import Pagination from "@pagination/default"
import { useEffect, useState } from "react"
import { routes, headers, host } from "@helpers/routes"

const _fetchDisciplinas = async (page) => {
  try {
    return await fetch(
      routes.internal.v1.turmas.list + `?page=${page - 1 || 0}`,
      { headers: headers }
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default function ListDisciplinas() {
  const [disciplinas, setDisciplinas] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [skeleton, setSkeleton] = useState(true)

  const fetchDisciplinas = (page) => {
    setSkeleton(true)
    _fetchDisciplinas(page).then(async (response) => {
      try {
        const {
          data: { content, totalPages, number },
        } = await response.json();
        setTotalPages(totalPages);
        setSkeleton(false)
        setCurrentPage(number + 1);
        setDisciplinas(RenderList(content));
      } catch (error) {
        return "falhou";
      }
    });
  };

  useEffect((_) => fetchDisciplinas(), []);

  return (
    <Pagination
      totalPages={totalPages}
      current={currentPage}
      callBack={fetchDisciplinas}
      skeleton={skeleton}
    >
      {disciplinas}
    </Pagination>
  );
}

const formalizarDias = horarios => {
  const converterParaTexto = {
    "0": "Sábado",
    "1": "Domingo",
    "2": "Segunda",
    "3": "Terça",
    "4": "Quarta",
    "5": "Quinta",
    "6": "Sexta"
  }
  const dias = [[],[],[],[],[],[],[]]
  horarios.map(horario => dias[horario.dia - 1].push(horario.horario))
  const dias_com_horario = dias.map((dia, index) => {
    if(dia.length > 0){
      return {
        dia: converterParaTexto[index],
        horarios: dia
      }
    }
  }).filter(element => element)

  console.log(dias_com_horario)

}

const GetRow = (data) => {
  const { codigo, disciplina, horarios } = data
  formalizarDias(horarios)
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{ disciplina } </div>
        <span className="badge bg-info rounded-pill"> { "horarios" } </span>
      </div>
      
      <span className="badge bg-info rounded-pill">{ codigo }</span>
    </li>
  );
};

const RenderList = data => {
  const list = data.map( usuario => GetRow(usuario))
  return (
    <ol className="list-group ">
        { list }
    </ol>
  )
}