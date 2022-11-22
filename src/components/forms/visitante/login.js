import Link from "next/link"
import React, { useState } from "react";
import { routes, headers } from "@helpers/routes"
import { useForm } from 'react-hook-form'
import AlertError from '@alerts/error'
import { useRouter } from "next/router";
import ButtonDefault from "@buttons/default"

export default function LoginForm(){
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const [isError, setIsError] = useState("")
    const [carregando, setCarregando] = useState(false)

     const onSubmit = data => {
        setCarregando(true)
        setIsError("")
        fetch(routes.internal.v1.auth.login, {
            method: "POST",
            body: JSON.stringify(data),
            headers,
        }).then(response => {
            if(response.redirected) router.push(response.url)
            else setIsError("Login ou senha inválidos")
        })
        .finally(_ => {
            setCarregando(false)
        })
    };
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Entrar</h1>
            <div className="mb-3">
                <label className="form-label" >Usuário</label>
                <input className="form-control" type="text" {...register('usuario') }/>
            </div>
            <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" {...register('senha')}/>
            </div>
            <ButtonDefault 
                acao={"Logando..."}
                estatico={"Logar"}
                carregando={carregando}
            />
            <hr></hr>
            <div className="form-text">Não possuí cadastro? <Link href="/visitante/cadastro">Clique aqui para cadastrar</Link></div>
        </form>
        <br/>
        { isError && <AlertError>{ isError }</AlertError>}
        </>
    );
}

