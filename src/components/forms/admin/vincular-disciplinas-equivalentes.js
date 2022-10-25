import { useForm } from 'react-hook-form'

export default function FormVincularDisciplinasEquivalentes(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Vincular Disciplina</h3>
        <p>Vincular disciplinas equivalentes a disciplinas já cadastradas</p>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Vincular:</label>
                <select className="form-select" {...register("gender", { required: true })}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">a esta disciplina cadastrada</label>
                <select className="form-select" {...register("gender", { required: true })}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <br/>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-primary btn-lg float-end">Vincular</button>
            </div>
        </form>
        </>
    );
}