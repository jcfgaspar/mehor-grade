import { routes, headers, host } from "@helpers/routes";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MessageContext } from "@helpers/context/message";
import ButtonDefault from "@buttons/default";

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

  const deleteDisciplina = (codigo) => {
    const url = routes.internal.v1.disciplinas.delete + `/${codigo}`;
    return fetch(url, { method: "delete", headers });
  };

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
    deleteDisciplina(codigo)
      .then((response) => {
        console.log(response.status);
        if (response.status == 204) showMessage(messageSuccess);
        else showMessage(messageFailed);
      })
      .catch(console.log)
      .finally((_) => {
        setCarregando(false);
        setDisciplinas("");
        resetSearch();
      });
  };

  return (
    <>
      <HeadRemoverDisciplina />
      <InputSearchDisciplina
        handleSubmit={handleSubmitSearch}
        callback={onSearchInput}
        register={registerSearch}
      />

      {isSearching ? <GetSkeleton /> : null}
      {disciplina ? (
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <RenderDisciplina info={disciplina} carregando={carregando} />
        </form>
      ) : null}
    </>
  );
}

const RenderDisciplina = (props) => {
  const RenderRow = (nome, valor) => {
    return (
      <tr>
        <th scope="row">{nome}</th>
        <td>{valor}</td>
      </tr>
    );
  };

  return (
    <>
      <br />
      <table className="table table-default table-striped-columns">
        <tbody>
          {RenderRow("Nome", props.info.nome)}
          {RenderRow("Codigo", props.info.codigo)}
        </tbody>
      </table>
      <ButtonDefault
        acao={"Removendo..."}
        estatico={"Remover"}
        carregando={props.carregando}
      />
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

const HeadRemoverDisciplina = (_) => {
  return (
    <>
      <h2>Remover disciplina</h2>
      <p>Excluí disciplina ofertados pela universidade</p>
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

const messageSuccess = {
  info: {
    title: "Uhul! Uma notícia boa 🥳",
    time: "Agora",
    message: "A Disciplina foi removida com sucesso!",
  },
};

const messageFailed = {
  info: {
    title: "Ops! Algo deu errado 😟",
    time: "Agora",
    message: "Não foi possível excluir a disciplina =(",
  },
};
