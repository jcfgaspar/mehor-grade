
import { useEffect, useState } from "react"
import { routes, headers, host } from "@helpers/routes"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const _fetchDisciplinas = async _ => {
  try {
    return await fetch(
      routes.internal.v1.historico.faltantes.completo,
      { headers: headers }
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};


export default function ListDisciplinas() {
  const [disciplinas, setDisciplinas] = useState("");

  const [skeleton, setSkeleton] = useState(true)

  const fetchDisciplinas = _ => {
    setSkeleton(true)
    _fetchDisciplinas().then(async (response) => {
      console.log(response)
      try {
        const data  = await response.json();
        setDisciplinas(RenderList(data));
        setSkeleton(false)
      } catch (error) {
        return "falhou";
      }
    });
  };

  useEffect((_) => fetchDisciplinas(), []);

  return (
    <>
        { skeleton 
            ? <Skeleton height={40} count={20} baseColor="#c7c7c7" highlightColor="#dcdcdc" borderRadius="0.5rem"/> 
            : disciplinas
        }
    </>
  )
}


const GetRow = data => {
    // const span = data.requisitos.map(req => { return <span key={req.codigo } className="badge bg-info rounded-pill"> { req.codigo } </span>} )
      return (
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{ data.nome } </div>
          {/* <span key={data.duracao } className="badge bg-info rounded-pill"> { "Semestres: " + data.duracao } </span> */}
        </div>
        <span className="badge bg-dark rounded-pill">{ "Código: " + data.codigo }</span>
      </li>
    );
  };

const RenderList = data => {
  console.log(data)
  const list = data.map( disciplina => GetRow(disciplina))
  return (
    <ol className="list-group ">
        { list }
    </ol>
  )
}