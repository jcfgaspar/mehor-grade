import { useForm } from 'react-hook-form'

export default function loginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    const nome = "Nome da disciplina"
    const codigo = "Código"
    const periodo = "Períodos"
    const disciplina = "Disciplinas"

    const StaticField = props => {
        return (
            <div className="mb-3 row">
                <label className="col-sm-4 col-form-label text-end"><strong>{ props.static }</strong></label>
                <div className="col-sm-8">
                    <input type="text" readOnly className="form-control-plaintext" value={ props.value }/>
                </div>
            </div>
        )
    }

    return (
        <> 
            <h2>Remover Curso</h2>
            <p>Excluí cursos ofertados pela universidade</p>
            <hr></hr>
            <StaticField static={ nome } value="Banco de dados" />
            <StaticField static={ codigo } value="BD1" />
            <StaticField static={ periodo } value="200 Horas" />
            <StaticField static={ disciplina } value="Matriz" />
            <br/>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-danger btn-lg float-end">Excluir Permanentemente</button>
            </div>
        </>
    );
}