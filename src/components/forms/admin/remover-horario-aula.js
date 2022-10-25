import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Disciplina = props => {
    return (
        <>
               <div className="mb-3">
                        <label className="form-label">selecione a turma</label>
                        <select className="form-select" {...props.register("gender", { required: true })}>
                            <option defaultValue>selecione</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-outline-danger btn-lg float-end">Remover horário-aula</button>
                    </div>
        
        </>
    )
}

const Alert = props => {
    return (
        <div className="alert alert-warning" role="alert">
            { props.text }
        </div>
    )
}


export default function loginForm(){
    const [flag, setFlag] = useState()
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Remover horário-aula</h3>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Selecione a turma</label>
                <select className="form-select" {...register("disciplina", { required: true })} onChange={ _ => setFlag(true)}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            {/* { flag &&  <Disciplina register={register}/> } */}
        </form>
        </>
    );
}