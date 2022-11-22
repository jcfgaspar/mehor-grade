import { routes, headers, host } from "@helpers/routes";
import { useForm } from "react-hook-form";
import React, { useState, useContext, createContext  } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MessageContext } from "@helpers/context/message";

const FormAddTurmaContext = createContext()

export default function FormRemoverCursosOfertados() {
  const [disciplina, setDisciplinas] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const { handleSubmit } = useForm();
  const messageCTX = useContext(MessageContext);
  const timeout = 500;
  let timeOutID = null;

  const {
    register: registerSearch,
    handleSubmit: handleSubmitSearch,
    getValues: getValuesSearch,
    reset: resetSearch,
  } = useForm();

  const {
    register: registerTurma,
    handleSubmit: handleSubmitTurma,
    getValues: getValuesTurma,
    reset: resetTurma,
  } = useForm();

  const setTurma = data => {
    const url = routes.internal.v1.turmas.add
    const body = JSON.stringify(data)
    console.log(body)
    return fetch(url, { method: "post", headers, body});
  }

  const getDisciplina = async (codigo) => {
    const url = routes.internal.v1.disciplinas.get + `?codigo=${codigo}`;
    return fetch(url, { method: "get", headers });
  };

  const showMessage = (message) => {
    console.log(message);
    messageCTX(message);
  };

  const onSearchInput = (_) => {
    clearTimeout(timeOutID);
    timeOutID = setTimeout((_) => _onSearchInput(), timeout);
  };

  const onSubmitForm = (_) => {
    clearTimeout(timeOutID);
    timeOutID = setTimeout((_) => _onSubmitForm(), timeout);
  };

  const _onSearchInput = (_) => {
    const codigo = getValuesSearch("codigo").toUpperCase();
    if (codigo.length == 5 || codigo.length == 6) {
      setDisciplinas("");
      setIsSearching(true);
      getDisciplina(codigo)
        .then(async (response) => {
          const json = await response.json();
          if (json.status == "NOT_FOUND") throw json.message;
          setDisciplinas(json);
        })
        .catch((error) => {
          showMessage({
            info: {
              title: "Ops! Algo deu errado 😟",
              time: "Agora",
              message: error,
            },
          });
        })
        .finally((_) => setIsSearching(false));
    }
  };

  const _onSubmitForm = (_) => {
    const codigo = getValuesSearch("codigo").toUpperCase();
    setCarregando(true);
  };

  const onSubmitFormAddTurm = async (_) => {
    const codigo = getValuesTurma("codigo").toUpperCase();
    const disciplina = getValuesSearch("codigo").toUpperCase();
    setCarregando(true);
    const response = await setTurma({ disciplina, codigo });
    const json = await response.json();
    console.log(json);
    if (response.status == 201){
      resetTurma()
      resetSearch()
      setDisciplinas("")
      showMessage(messageSuccess);
    }

    if (response.status == 400)
      showMessage({
        info: {
          title: "Ops! Algo deu errado 😟",
          time: "Agora",
          message: json.codigo,
        },
      });

    if (response.status == 500)
      showMessage({
        info: {
          title: "Ops! Algo deu errado 😟",
          time: "Agora",
          message: json.message,
        },
      });
    setCarregando(false);
  };

  
  return (
    <FormAddTurmaContext.Provider value={{
      registerTurma,
      handleSubmitTurma,
      getValuesTurma,
      onSubmitFormAddTurm,
    }}>
      <HeadAdicionarTurma />
      <InputSearchDisciplina
        handleSubmit={handleSubmitSearch}
        callback={onSearchInput}
        register={registerSearch}
      />
      {isSearching ? <GetSkeleton /> : null}
      {disciplina ? (
        <>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <RenderDisciplina info={disciplina} carregando={carregando} />
          </form>
          <SubmitInput carregando={carregando} /> 
        </>
      ) : null}
    </FormAddTurmaContext.Provider>
  );
}

const RenderDisciplina = (props) => {
  return (
    <>
      <br />
      <p> Digite a turma para adicionar no(a) {props.info.nome}</p>
    </>
  );
};

const InputSearchDisciplina = (props) => {
  const { callback, handleSubmit, register } = props;
  return (
    <form onKeyUp={handleSubmit(callback)}>
      <div className="hstack gap-3">
        <input
          className="form-control me-auto"
          type="text"
          placeholder="Digite o código da disciplina: XXXXX ou XXXXXX"
          aria-label="Add your item here..."
          style={{ textTransform: "uppercase" }}
          {...register("codigo", { required: true })}
        />
      </div>
    </form>
  );
};

const HeadAdicionarTurma = (_) => {
  return (
    <>
      <h2>Adicionar Turma</h2>
      <p>Digite a disciplina</p>
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
      <br />
      <Skeleton
        height={38}
        baseColor={color}
        highlightColor={ligthColor}
        borderRadius={border}
      />
      <Skeleton
        height={38}
        baseColor={color}
        highlightColor={ligthColor}
        borderRadius={border}
      />
      <Skeleton
        height={38}
        baseColor={color}
        highlightColor={ligthColor}
        borderRadius={border}
      />
      <br />
      <Skeleton
        height={50}
        baseColor={color}
        highlightColor={ligthColor}
        borderRadius={border}
      />
    </>
  );
};

const Spin = (props) => {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      {" " + props.text}
    </>
  );
};

const CodigoInput = (props) => {
  return (
    <input
      className="form-control me-auto"
      type="text"
      placeholder="Digite o código da turma"
      aria-label="Add your item here..."
      style={{ textTransform: "uppercase" }}
        {...props.register("codigo", { required: true })}
    />
  );
};

const SubmitInput = (props) => {
  const { carregando } = props;
  const { registerTurma, handleSubmitTurma, onSubmitFormAddTurm } = useContext(FormAddTurmaContext)
  const text = carregando ? <Spin text="Adicionando..." /> : "adicionar";
  return (
    <form onSubmit={handleSubmitTurma(onSubmitFormAddTurm)}>
        <div className="d-grid gap-2">
        <CodigoInput register={registerTurma}/>
        <br />
        <button
            className="btn btn-outline-dark btn-lg float-end"
            type="submit"
            aria-disabled={carregando}
        >
            {text}
        </button>
        </div>
    </form>
  );
};

const messageSuccess = {
  info: {
    title: "Uhul! Uma notícia boa 🥳",
    time: "Agora",
    message: "A turma foi adicionada com sucesso!",
  },
};

const messageFailed = {
  info: {
    title: "Ops! Algo deu errado 😟",
    time: "Agora",
    message: "Não foi possível adicionar a turma",
  },
};
