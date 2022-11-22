import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { MessageContext } from "@helpers/context/message";
import { routes, headers } from "@helpers/routes";
import ButtonDefault from "@buttons/default";

export default function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const messageCTX = useContext(MessageContext);
  const [carregando, setCarregando] = useState(false);

  const onSubmit = (data) => {
    setCarregando(true);
    const { disciplina_a, disciplina_b } = data;
    const body = [{ codigo: disciplina_a }];
    fetch(
      routes.internal.v1.disciplinas.add +
        `/equivalencia?codigo=${disciplina_b}`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers,
      }
    )
      .then(async (response) => {
        const { status } = response;
        if (status == 201) return messageCTX(message201);
        if (status == 200) return messageCTX(message200);
        messageCTX(messageError);
      })
      .finally((_) => setCarregando(false));
  };

  return (
    <>
      <h2>Vincular Equivalentes</h2>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Código</label>
          <input
            className="form-control"
            type="text"
            {...register("disciplina_a", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Código</label>
          <input
            className="form-control"
            type="text"
            {...register("disciplina_b", { required: true })}
          />
        </div>
        <ButtonDefault
          acao={"Vinculando..."}
          estatico={"Vincular"}
          carregando={carregando}
        />
      </form>
    </>
  );
}

const message201 = {
  info: {
    title: "Sucesso!!!",
    time: "Agora",
    message: "Disciplinas vinculadas",
  },
};

const message200 = {
  info: {
    title: "Sucesso!",
    time: "Agora",
    message: "disciplinas vinculadas",
  },
};

const messageError = {
  info: {
    title: "[servidor] Eu tentei, mas...",
    time: "Agora",
    message: "Não foi possível adicionar curso",
  },
};
