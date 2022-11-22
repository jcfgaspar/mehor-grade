import { useForm } from "react-hook-form";
import { routes, headers } from "@helpers/routes"
import React, { useContext, useState } from "react";
import { MessageContext }  from "@helpers/context/message"
import ButtonDefault from "@buttons/default"

export default function AdicionarDisciplina() {
  const { register, handleSubmit } = useForm();
  const messageCTX = useContext(MessageContext)
  const [carregando, setCarregando] = useState(false);

  const onSubmit = data => {
    setCarregando(true)
    fetch(routes.internal.v1.disciplinas.add, {
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
    <>
      <h3>Cadastrar Disciplina</h3>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nome da disciplina</label>
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
            className="form-control"
            {...register("codigo", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Carga Horária</label>
          <input
            type="number"
            className="form-control"
            {...register("cargaHoraria", { required: true })}
          />
        </div>
        <br></br>
        <ButtonDefault
        acao={"Adicionando..."}
        estatico={"Adicionar"}
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
    message: "Disciplina cadastrada",
  }
}

const message200 = {
  info: {
    title: "Eita! Deu boa, mas...",
    time: "Agora",
    message: "Disciplina já cadastrada",
  }
}

const messageError = {
  info: {
    title: "[servidor] Eu tentei, mas...",
    time: "Agora",
    message: "Não foi possível adicionar a disciplina",
  }
}
