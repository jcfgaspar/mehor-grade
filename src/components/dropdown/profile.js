import Link from "next/link"

export default function DropdownProfile(props){

   return (
    <>
        <hr></hr>
        <div className="dropdown pos-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            <button className="btn btn-menu d-inline-flex align-items-center rounded border-0" type="button" data-bs-toggle="dropdown" aria-expanded="true">
               { props.user }
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">

                    <li><Link href="/">Configurações</Link></li>
                    <li><Link href="/">Perfil</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link href="/">Sair</Link></li>
            </ul>
        </div>
    </>
   )
}