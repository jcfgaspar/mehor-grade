import { useForm } from 'react-hook-form'

export default function LoginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Cadastrar Disciplina</h3>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Nome da disciplina</label>
                <input className="form-control" type="email" { ...register('nome', { required: true }) }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Código</label>
                <input type="text" className="form-control" { ...register('codigo', { required: true }) }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Carga Horária</label>
                <input type="number" className="form-control" { ...register('carga', { required: true }) }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Matriz Curricular</label>
                <input type="text" className="form-control" { ...register('matriz', { required: true }) }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Turmas</label>
                <input type="text" className="form-control" { ...register('turmas', { required: true }) }/>
            </div>
            <br></br>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-primary btn-lg float-end">Inserir</button>
            </div>
        </form>
        </>
    );
}