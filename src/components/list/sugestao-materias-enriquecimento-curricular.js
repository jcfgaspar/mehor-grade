import { useForm } from "react-hook-form";
import { routes, headers } from "@helpers/routes";
import React, { useContext, useState } from "react";
import ButtonDefault from "@buttons/default";

export default function ListGeraracaoGrade() {
  const { register, handleSubmit } = useForm();
  const [carregando, setCarregando] = useState(false);
  const [disciplinas, setDisciplinas] = useState([])
  const [error, setError] = useState()

  const toJson = (response) => response.json();

  const isNotNull = data => {
    if(data.length > 0)
      return data
    throw "Sentimos muito! Não encontramos horários para o dia informado."
  }

  const onSubmit = async (data) => {
    setCarregando(true);
    setDisciplinas([])
    setError('')
    const query = "?" + new URLSearchParams(data).toString()
    await fetch(routes.internal.v1.recomendacoes.enriquecimento + query, {
      method: "GET",
      headers,
    })
      .then(toJson)
      .then(isNotNull)
      .then(response => {
        console.log(response)
        setDisciplinas(response)
      })
      .catch(error => {
        setError("Algo não deu certo: " + error)
      })

    setCarregando(false);
  };

  return (
    <>
      <h3>Recomendação de disciplina para enriquecimento curricular</h3>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Dia semana</label>
          <input
            className="form-control"
            type="horas"
            {...register("dia", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Horário</label>
          <input
            className="form-control"
            type="horas"
            {...register("horario", { required: true })}
          />
        </div>
       
        <br></br>
        <ButtonDefault
          acao={"Pesquisando..."}
          estatico={"Sugerir"}
          carregando={carregando}
        />
      </form>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      { error && <p>{ error } </p> }
      { carregando && <p>Carregando...</p>}

      { disciplinas.length
        ? <RenderDisciplina data={disciplinas}/>
        : null
      }
    </>
  );
}

const RenderDisciplina = ({ data }) => {
  return (
    <ul className="list-group">
      { data.map(disciplina => {
        return (
          <li className="list-group-item" key={disciplina.nome + disciplina.horario}>
            { disciplina.nome + " - " + disciplina.turma + " - (" + disciplina.horario + ")" }
          </li>
        )
      })}
    </ul>
  )
}
