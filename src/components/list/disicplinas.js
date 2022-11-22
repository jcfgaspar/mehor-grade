import Pagination from "@pagination/default"
import { useEffect, useState } from "react"
import { routes, headers, host } from "@helpers/routes"

const _fetchDisciplinas = async (page) => {
  try {
    return await fetch(
      routes.internal.v1.disciplinas.list + `?page=${page - 1 || 0}`,
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
        console.log(content)
        setTotalPages(totalPages);
        setCurrentPage(number + 1);
        setDisciplinas(RenderList(content));
        setSkeleton(false)
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


const GetRow = data => {
    const span = data.requisitos.map(req => { return <span key={req.codigo } className="badge bg-info rounded-pill"> { req.codigo } </span>} )
      return (
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{ data.nome } </div>
              { span.length ?  span : <br/> }
        </div>
        <span className="badge bg-dark rounded-pill">{ data.codigo }</span>
      </li>
    );
  };

const RenderList = data => {
  const list = data.map( disciplina => GetRow(disciplina))
  return (
    <ol className="list-group ">
        { list }
    </ol>
  )
}