import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function loginForm(){
    const { register, handleSubmit } = useForm()
    const [flag,setFlag] = useState(false)


    const onSubmit = data => {
        console.log(data)
    }

    return (
      <> 
        <h3>Desvincular Disciplinas</h3>
        <p>Desvincular disciplinas equivalentes a disciplinas já cadastradas</p>
        <hr></hr>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Desvincular:</label>
                <select className="form-select" {...register("gender", { required: true })} onChange={ _ => setFlag(true)}>
                    <option defaultValue>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            { flag && 
                <>
                    <div className="mb-3">
                        <label className="form-label">a esta disciplina cadastrada</label>
                        <select className="form-select" {...register("gender", { required: true })}>
                            <option defaultValue>selecione</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-outline-danger btn-lg float-end">Desvincular</button>
                    </div>
                </>
             }
        </form>
        </>
    );
}