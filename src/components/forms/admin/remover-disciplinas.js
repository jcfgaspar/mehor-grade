import { useForm } from 'react-hook-form'

export default function LoginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    const nome = "Nome da disciplina"
    const codigo = "Código"
    const carga = "Carga Horária"
    const matriz = "Matriz Curricular"
    const turmas = "Turmas"

    const StaticField = props => {
        return (
            <div className="mb-3 row">
                <label className="col-sm-4 col-form-label text-end"><strong>{ props.static }</strong></label>
                <div className="col-sm-8">
                    <input type="text" readOnly className="form-control-plaintext" defaultValue={ props.value }/>
                </div>
            </div>
        )
    }

    return (
        <> 
            <h2>Remover Disciplina</h2>
            <p>Excluí disciplinas ofertadas pela universidade</p>
            <hr></hr>
            <StaticField static={ nome } value="Banco de dados" />
            <StaticField static={ codigo } value="BD1" />
            <StaticField static={ carga } value="200 Horas" />
            <StaticField static={ matriz } value="Matriz" />
            <StaticField static={ turmas } value="S71" /> 
            <br/>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-danger btn-lg float-end">Excluir Permanentemente</button>
            </div>
        </>
    );
}