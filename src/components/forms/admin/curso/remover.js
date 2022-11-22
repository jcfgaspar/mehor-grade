import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { routes, headers } from "@helpers/routes";
import DropDownCursos from "@dropdown/cursos";
import { MessageContext } from "@helpers/context/message";
import "react-loading-skeleton/dist/skeleton.css";

export default function FormRemoverCursosOfertados() {
  const { register, handleSubmit, getValues } = useForm();
  const [wasReturned, setWasReturned] = useState(false);
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const messageCTX = useContext(MessageContext);

  useEffect((_) => {
    fetchCursos()
      .then(setCursos)
      .then((_) => setWasReturned(true))
  }, []);

  const onSubmit = _ => {
    const field_curso = getValues("curso");
    if (field_curso == 0)
      return messageCTX(messageFailed);
    setCarregando(true);
    fetch(routes.internal.v1.cursos.delete + `/${field_curso}`, {
      method: "delete",
      headers,
    })
      .then((response) => {
        console.log(response);
        if (response.status == 204) {
          messageCTX(messageSuccess);
          setCursos(cursos.filter(curso => curso.codigo != field_curso))
        }
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
            <br/>
            <SubmitInput carregando={carregando} />
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
    message: "curso foi removido com sucesso!",
  },
};

const messageFailed = {
  info: {
    title: "Ops! Algo deu errado 😟",
    time: "Agora",
    message: "curso não selecionado",
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

const HeadRemoverCursos = (_) => {
  return (
    <>
      <h2>Remover Curso</h2>
      <p>Excluí cursos ofertados pela universidade</p>
      <hr></hr>
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


const Spin = props => {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
        { " " + props.text}
    </>
  )
}

const SubmitInput = (props) => {
  const { carregando } = props
  const text = carregando ? <Spin text="removendo..."/> : "Remover"
  return (
    <div className="d-grid gap-2">
       <button
        className="btn btn-outline-danger btn-lg float-end"
        type="submit"
        aria-disabled={carregando}
      >
        { text }
      </button>

    </div>
  );
};