import { useForm } from 'react-hook-form'

export default function loginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Cadastrar Turma</h3>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Código</label>
                <input type="text" className="form-control" { ...register('codigo', { required: true }) }/>
            </div>

            <div className="mb-3">
                <label className="form-label">Disciplina</label>
                <select className="form-select" {...register("gender", { required: true })}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <br></br>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-primary btn-lg float-end">Inserir</button>
            </div>
        </form>
        </>
    );
}