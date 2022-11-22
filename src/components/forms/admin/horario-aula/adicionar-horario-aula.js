import { useForm } from 'react-hook-form'

export default function LoginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Adicionar Horário-Aula turma</h3>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Turma</label>
                <select className="form-select" {...register("gender", { required: true })}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
           
            <div className="mb-3">
                <label className="form-label">Dia</label>
                <input type="text" className="form-control" { ...register('dia', { required: true }) }/>
            </div>

            <div className="mb-3">
                <label className="form-label">Horário</label>
                <input type="text" className="form-control" { ...register('horario', { required: true }) }/>
            </div>
           
            <br></br>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-primary btn-lg float-end">Inserir</button>
            </div>
        </form>
        </>
    );
}