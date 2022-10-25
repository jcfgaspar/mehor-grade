import Link from 'next/link';
import DropdownProfile from "src/components/dropdown/profile";
  
export default function PageLayout({ children }) {
  
  return (
    <>
      <div className="d-flex flex-nowrap">
        <div className="flex-shrink-0 p-3 bg-white mw280">
          <span className="fs-5 fw-semibold">Área do administrador</span>
          <hr></hr>
          <ul className="list-unstyled ps-0">





            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Cursos
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link href="/admin/cursos/adicionar"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">adicionar</a></Link></li>
                  <li> <Link href="/admin/cursos/remover"><a href="" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">remover </a></Link></li>
                </ul>
              </div>
            </li>

            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#disciplina-collapse" aria-expanded="false">
                Disciplinas
              </button>
              <div className="collapse" id="disciplina-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link href="/admin/disciplinas/adicionar"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">adicionar</a></Link></li>
                  <li> <Link href="/admin/disciplinas/remover"><a href="" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">remover </a></Link></li>
                </ul>
              </div>
            </li>
            
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#turmas-collapse" aria-expanded="false">
                Turmas
              </button>
              <div className="collapse" id="turmas-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link href="/admin/disciplinas/turmas/adicionar"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">adicionar</a></Link></li>
                  <li><Link href="/admin/disciplinas/turmas/remover"><a href="" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">remover </a></Link></li>
                  <li><Link href="/admin/disciplinas/turmas/adicionar-horario-aula"><a href="" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">adicionar horário-aula </a></Link></li>
                  <li><Link href="/admin/disciplinas/turmas/remover-horario-aula"><a href="" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">remover horário-aula</a></Link></li>
                </ul>
              </div>
            </li>
            
            <hr></hr>


            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#vincular-collapse" aria-expanded="false">
                Vincular
              </button>
              <div className="collapse" id="vincular-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link href="/admin/disciplinas/vincular/equivalentes"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">equivalentes</a></Link></li>
                  <li><Link href="/admin/disciplinas/vincular/matriz-curricular"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">matriz curricular</a></Link></li>
                  <li><Link href="/admin/disciplinas/vincular/pre-requisito"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">pré-requisitos</a></Link></li>
                </ul>
              </div>
            </li>


            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#desvincular-collapse" aria-expanded="false">
                Desvincular
              </button>
              <div className="collapse" id="desvincular-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Link href="/admin/disciplinas/desvincular/equivalentes"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">equivalentes</a></Link></li>
                  <li><Link href="/admin/disciplinas/desvincular/matriz-curricular"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">matriz curricular</a></Link></li>
                  <li><Link href="/admin/disciplinas/desvincular/pre-requisito"><a href="#" className="link-dark d-inline-flex text-decoration-none rounded btn-pretty">pré-requisitos</a></Link></li>
                </ul>
              </div>
            </li>






          </ul>

          <DropdownProfile user="Administrador"/>
        </div>

        <main className="full"> { children }</main>
      </div>
    </>
  );
}

