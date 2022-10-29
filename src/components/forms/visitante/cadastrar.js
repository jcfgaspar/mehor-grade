import { useForm } from 'react-hook-form'
import Link from "next/link"

export default function CadastrarForm(){
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label" >Nome</label>
                <input className="form-control" type="text" {...register('nomex') }/>
            </div>
            <div className="mb-3">
                <label className="form-label" >Endereço de email</label>
                <input className="form-control" type="email" {...register('email') }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" {...register('password')}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirme a Senha</label>
                <input type="password" className="form-control" {...register('password-check')}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" {...register('checkbox')}/>
                <label className="form-check-label">Aceito os termos de política e privacidade</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </>
    );
}