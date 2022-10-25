import Link from "next/link";
import DropdownProfile from "src/components/dropdown/profile";


export default function PageLayout({ children }) {
  return (
    <>
      <div className="d-flex flex-nowrap scroll">
        <div className="flex-shrink-0 p-3 bg-white mw280">
          <span className="fs-5 fw-semibold">Área do discente</span>
          <hr></hr>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Disciplina
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link href="/discente/disciplinas/cadastrar">
                      <a
                        href="#"
                        className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                      >
                        Cadastrar
                      </a>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/discente/disciplinas/faltantes">
                      <a
                        href=""
                        className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                      >
                        Faltantes
                      </a>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/discente/disciplinas/historico-cursada">
                      <a
                        href=""
                        className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                      >
                        Histórico cursada
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#sugestao-collapse"
                aria-expanded="false"
              >
                Sugestão
              </button>
              <div className="collapse" id="sugestao-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link href="/discente/sugestao/opcionais">
                      <a
                        href="#"
                        className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                      >
                        Disciplina opcionais
                      </a>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/discente/sugestao/enriquecimento-curricular">
                      <a
                        href=""
                        className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                      >
                        Enriquecimento Curricular
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
       

            <li className="mb-1">
              <button
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#geracao-collapse"
                aria-expanded="false"
              >
                Geração
              </button>
              <div className="collapse" id="geracao-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <Link href="/discente/geracao/criar-grade">
                      <a
                        href="#"
                        className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                      >
                        Criar grade
                      </a>
                    </Link>
                  </li>
                
                </ul>
              </div>
            </li>
          </ul>
          <DropdownProfile user="Usuário"/>
        </div>

        <main className="full"> 
            <div className="scroll">
            {children}
            </div>
        </main>
      </div>
    </>
  );
}
