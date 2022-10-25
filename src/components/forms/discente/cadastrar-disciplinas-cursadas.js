import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormCadastroDisciplinaCursada() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
        console.log(data);
    }

  return (
    <>
      <h3>Cadastrar Disciplinas Cursadas</h3>
      <p>Cadastrar disciplinas cursadas pelo aluno</p>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Disciplina:</label>
          <select
            className="form-select"
            {...register("disciplina", { required: true })}   >
            <option defaultValue>selecione</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
    </>
  );
}
