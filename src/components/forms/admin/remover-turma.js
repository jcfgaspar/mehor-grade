import { useForm } from 'react-hook-form'

export default function loginForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    const disciplinas = "Nome da disciplina"
    const codigo = "Código"

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
            <h2>Remover turma</h2>
            <p>Excluí turma ofertadas pela universidade</p>
            <hr></hr>
            <StaticField static={ codigo } value="Código da turma" />
            <StaticField static={ disciplinas } value="Banco de dados" />
            <br/>
            <div className="d-grid gap-2">
                <button type="button" className="btn btn-outline-danger btn-lg float-end">Excluir Permanentemente</button>
            </div>
        </>
    );
}