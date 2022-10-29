import { useForm } from 'react-hook-form'

export default function LoginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h2>Cadastrar curso</h2>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Nome do curso</label>
                <input className="form-control" type="email" { ...register('curso', { required: true }) }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Código</label>
                <input type="text" className="form-control" { ...register('codigo', { required: true }) }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Períodos</label>
                <input type="number" className="form-control" { ...register('periodos', { required: true }) }/>
            </div>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-primary btn-lg float-end">Inserir</button>
            </div>
        </form>
        </>
    );
}