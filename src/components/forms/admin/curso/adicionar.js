import { useForm } from "react-hook-form";
import { routes, headers } from "@helpers/routes"
import React, { useContext, useState } from "react";
import { MessageContext }  from "@helpers/context/message"
import ButtonDefault from "@buttons/default"

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const messageCTX = useContext(MessageContext)
  const [carregando, setCarregando] = useState(false);

  const onSubmit = data => {
    setCarregando(true)
    fetch(routes.internal.v1.cursos.add, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    }).then(async (response) => {
      const { status } = response;
      if (status == 201)
        return messageCTX(message201);
      if (status == 200)
        return messageCTX(message200);
      messageCTX(messageError)
    }).finally(_ => setCarregando(false));
  };

  return (
    <main>
      <h2>Cadastrar curso</h2>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nome do curso</label>
          <input
            className="form-control"
            type="text"
            {...register("nome", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Código</label>
          <input
            type="text"
            maxLength={3}
            className="form-control"
            {...register("codigo", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Períodos</label>
          <input
            type="number"
            className="form-control"
            {...register("quantidadeDePeriodos", { required: true })}
          />
        </div>
        <ButtonDefault
          acao={"Adicionando..."}
          estatico={"Cadastrar"}
          carregando={carregando}
        />
      </form>
    </main>
  );
}

const message201 = {
  info: {
    title: "Sucesso!!!",
    time: "Agora",
    message: "curso cadastrado",
  }
}

const message200 = {
  info: {
    title: "Eita! Deu boa, mas...",
    time: "Agora",
    message: "curso já cadastrado",
  }
}

const messageError = {
  info: {
    title: "[servidor] Eu tentei, mas...",
    time: "Agora",
    message: "Não foi possível adicionar curso",
  }
}