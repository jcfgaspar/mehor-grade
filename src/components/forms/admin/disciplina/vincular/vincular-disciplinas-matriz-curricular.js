import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { routes, headers } from "@helpers/routes";
import DropDownCursos from "@dropdown/cursos";
import { MessageContext } from "@helpers/context/message";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonDefault from "@buttons/default"

export default function FormRemoverCursosOfertados() {
  const { register, handleSubmit, getValues } = useForm();
  const [wasReturned, setWasReturned] = useState(false);
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const messageCTX = useContext(MessageContext);

  useEffect((_) => {
    fetchCursos()
      .then(setCursos)
      .then((_) => setWasReturned(true));
  }, []);

  const onSubmit = (data) => {
    const body = {
        "curso": data.curso,
        "disciplina": data.disciplina,
        "periodo": data.periodo,
        "preRequisitos": 0,
        "tipoDeDisciplina": data.tipoDeDisciplina
    }
    setCarregando(true);
      console.log(routes.internal.v1.disciplinas.register)
    fetch(routes.internal.v1.disciplinas.register, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then((response) => {
        console.log(response);
        if (response.status == 201 || response.status == 200)
          return messageCTX(messageSuccess)
        messageCTX(messageFailed)
      })
      .catch(console.log)
      .finally((_) => setCarregando(false));
  };

  return (
    <>
      <HeadRemoverCursos />
      <form onSubmit={handleSubmit(onSubmit)}>
        {wasReturned ? (
          <>
            <DropDownCursos register={register} cursos={cursos} />
            <br />
            <InputDisciplina
              register={register}
              disciplina="Código da disciplina"
              registerName="disciplina"
            />
            <InputDisciplina
              register={register}
              disciplina="Período"
              registerName="periodo"
            />
            <InputDropDown register={register}/>
            <br />
            <ButtonDefault
          acao={"Vinculando..."}
          estatico={"Vincular"}
          carregando={carregando}
/>
          </>
        ) : (
          GetSkeleton()
        )}
      </form>
    </>
  );
}

const messageSuccess = {
  info: {
    title: "Uhul! Uma notícia boa 🥳",
    time: "Agora",
    message: "Disciplina vincula a matriz curricular",
  },
};

const messageFailed = {
  info: {
    title: "Ops! Algo deu errado 😟",
    time: "Agora",
    message: "Não foi possível vincular",
  },
};

const fetchCursos = async (_) => {
  try {
    const response = await fetch(routes.internal.v1.cursos.list, {
      headers: headers,
    });
    const {
      data: { content },
    } = await response.json();
    return content;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const InputDropDown = props => {
  return (

        <select className="form-select" {...props.register("tipoDeDisciplina", { required: true })}>
          <option key="1" value="1"> Obrigatória</option>
          <option key="2" value="2"> Segundo estrato</option>
          <option key="3" value="3"> Trilha</option>
          <option key="4" value="4"> Opcional</option>
        </select>

  )
}

const InputDisciplina = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.disciplina}</label>
      <input
        className="form-control"
        type="text"
        {...props.register(props.registerName, { required: true })}
      />
    </div>
  );
};

const HeadRemoverCursos = (_) => {
  return (
    <>
      <h2>Vincular matriz-curricular</h2>
      <hr></hr>
      <p>Selecione o curso:</p>
    </>
  );
};

const GetSkeleton = (_) => {
  const color = "#c7c7c7";
  const ligthColor = "#dcdcdc";
  const border = "0.5rem";

  return (
    <>
      <Skeleton
        height={32}
        baseColor={color}
        highlightColor={ligthColor}
        borderRadius={border}
      />
      <br />

      <Skeleton
        height={32}
        baseColor={color}
        highlightColor={ligthColor}
        borderRadius={border}
      />
      <br></br>
      <Skeleton
        height={50}
        baseColor={color}
        highlightColor={ligthColor}
        borderRadius={border}
      />
    </>
  );
};
