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
    const URL = "/api/v1/discente/cadastrar"
    const body = {
      "disciplinas": [
        {
          "codigo": data.codigo
        }
      ],
      "periodo": data.periodo
    }
    setCarregando(true)
    fetch(URL, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers,
    }).then(async (response) => {
      const { status } = response;
      if (status == 201)
        return messageCTX(message201);
      if (status == 200)
        return messageCTX(message201);
      messageCTX(messageError)
    }).finally(_ => setCarregando(false));
  };

  return (
    <>
      <h3>Cadastrar Disciplina Cursada</h3>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Código da disciplina</label>
          <input
            type="text"
            className="form-control"
            {...register("codigo", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Período da disciplina</label>
          <input
            type="text"
            className="form-control"
            {...register("periodo", { required: true })}
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
