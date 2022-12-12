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


  const splitDay = async data => {
    const converter_para_dia = dia => dia - 1
    const dia_da_semana = [[],[],[],[],[],[],[],]
    await data.forEach(disciplina => {
      const dia = converter_para_dia(disciplina.dia)
      dia_da_semana[dia].push(disciplina) 
    });
    console.log(data)
    return dia_da_semana
  }

  const isNotNull = data => {
    if(data.length > 0)
      return data
    throw "Muitos parâmetros na pesquisa!"
  }

  const onSubmit = async (data) => {
    setCarregando(true);
    setDisciplinas([])
    setError('')
    const query = "?" + new URLSearchParams(data).toString()
    await fetch(routes.internal.v1.recomendacoes.default + query, {
      method: "PATCH",
      headers,
    })
      .then(toJson)
      .then(isNotNull)
      .then(splitDay)
      .then(setDisciplinas)
      .catch(error => {
        setError("Algo não deu certo: " + error)
      })

    setCarregando(false);
  };

  return (
    <>
      <h3>Recomendação de disciplina</h3>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Carga horária máxima</label>
          <input
            className="form-control"
            type="horas"
            {...register("horas", { required: true })}
          />
        </div>
        <div
          className="btn-group d-flex justify-content-cente"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck1"
            autoComplete="off"
            {...register("manha")}
          />
          <label className="btn btn-outline-dark" htmlFor="btncheck1">
            Manhã
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck2"
            autoComplete="off"
            {...register("tarde")}
          />
          <label className="btn btn-outline-dark" htmlFor="btncheck2">
            Tarde
          </label>

          <input
            type="checkbox"
            className="btn-check "
            id="btncheck3"
            autoComplete="off"
            {...register("noite")}
          />
          <label className="btn btn-outline-dark" htmlFor="btncheck3">
            Noite
          </label>
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

      <SugestoesTabViews disciplinas={disciplinas}/>
    </>
  );
}

const TabController = ({ id, name }) => {
  return (
    <button
      className="btn btn-outline-dark "
      id={ id + "-tab" }
      data-bs-toggle="pill"
      data-bs-target={ "#" + id }
      type="button"
      role="tab"
      aria-controls={ id }
      aria-selected="true"
      style={{width: "200px"}}
    >
      { name }
    </button>
  );
};

const convertNumberToWeekDay = number => {
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return days[number];
}

const RenderWeekDayControllers = ({ data }) => {
  if(!data) return null
  return data.map((day, index) => {
    if(day.length){
      const WeekDay = convertNumberToWeekDay(index)
      return <TabController id={WeekDay} name={WeekDay} key={WeekDay}/>
    }
  })
}

const RenderWeekDayTab = ({ data }) => {
  if(!data) return null
  return data.map((day, index) => {
    if(day.length){
      const WeekDay = convertNumberToWeekDay(index)
      return (
        <TabView id={WeekDay} key={WeekDay}>
          <RenderDisciplina data={day}/>
        </TabView>
      )
    }
  })
}

const TabView = ({id, children}) => {
  return (
    <div
      className="tab-pane fade show"
      id={ id }
      role="tabpanel"
      aria-labelledby={ id + "-tab" }
    >
      { children }
    </div>
  );
};

const SugestoesTabViews = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-start">
          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            { props.disciplinas.length
              ? <RenderWeekDayControllers data={props.disciplinas}/>
              : null
            }
          </div>
          <div className="tab-content" id="v-pills-tabContent"  style={{ width: "100%", maxHeight:"300px !important", overflow:"auto"}}>
            { props.disciplinas.length
              ? <RenderWeekDayTab data={props.disciplinas}/>
              : null
            }

          </div>
        </div>
      </div>
    </div>
  );
};

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


const Segunda = (_) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Banco de dado I - S71 - Bloco A - (10h às 12h)
      </li>
      <li className="list-group-item">
        Programação II - S73 - Bloco B - (17h às 20h)
      </li>
    </ul>
  );
};

const Quarta = (_) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Filosofia - A75 - Bloco C - (10h às 12h)
      </li>
    </ul>
  );
};

const Quinta = (_) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Sociologia - B23 - Bloco D - (15h às 16h)
      </li>
    </ul>
  );
};
