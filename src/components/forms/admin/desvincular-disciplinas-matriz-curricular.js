import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Disciplina = props => {
    return (
        <>
               <div className="mb-3">
                        <label className="form-label">a esta disciplina cadastrada</label>
                        <select className="form-select" {...props.register("gender", { required: true })}>
                            <option defaultValue>selecione</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-outline-danger btn-lg float-end">Desvincular disciplina</button>
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
    const { register, handleSubmit } = useForm()
    const [flag,setFlag] = useState(false)
    const [existe,setExiste] = useState(false)
    

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Desvincular matriz curricular</h3>
        <p>Desvincular disciplinas como pré-requisitos de disciplinas já cadastradas</p>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Desvincular o pré-requisito:</label>
                <select className="form-select" {...register("disciplina", { required: true })} onChange={ _ => setFlag(true)}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            { flag &&  <Disciplina register={register}/> }
        </form>
        </>
    );
}