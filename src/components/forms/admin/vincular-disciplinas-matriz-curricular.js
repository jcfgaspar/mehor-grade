import { useForm } from 'react-hook-form'

export default function FormVincularDisciplinasMatrizCurricular(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Matriz-curricular</h3>
        <p>Vincular uma disciplina como item de matriz curricular</p>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Vincular a disciplina:</label>
                <select className="form-select" {...register("disciplina", { required: true })}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">A matriz curricular</label>
                <select className="form-select" {...register("matriz", { required: true })}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <br/>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-outline-primary btn-lg float-end">Vincular na Matriz curricular</button>
            </div>
        </form>
        </>
    );
}