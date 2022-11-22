import Pagination from "@pagination/default"
import { createContext, useContext, useEffect, useState } from "react"
import { routes, headers, host } from "@helpers/routes"

const UserContext = createContext()

export default function ListDisciplinas() {
  const [disciplinas, setDisciplinas] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [skeleton, setSkeleton] = useState(true)

  const onRemoveUser = userID => {
    console.log(userID)
  }

  const onEditUser = userID => {
    console.log(userID)
  }

  const onPromoveUser = userID => {
    console.log(userID)
  }

  const fetchUsuarios = (page) => {
    setSkeleton(true)
    _fetchUsuarios(page).then(async (response) => {
      try {
        const {
          data: { content, totalPages, number },
        } = await response.json();
        setTotalPages(totalPages);
        setCurrentPage(number + 1);
        setDisciplinas(RenderList(content));
        setSkeleton(false)
      } catch (error) {
        return "falhou";
      }
    });
  };

  useEffect((_) => fetchUsuarios(), []);

  return (
    <UserContext.Provider value={{
        onRemoveUser,
        onEditUser,
        onPromoveUser
    }}>
      <Pagination
        totalPages={totalPages}
        current={currentPage}
        callBack={fetchUsuarios}
        skeleton={skeleton}
        title="Lista de Usuários"
      >
        {disciplinas}
      </Pagination>
    </UserContext.Provider>
    )
}


const _fetchUsuarios = async (page) => {
  try {
    return await fetch(
      routes.internal.v1.usuarios.list + `?page=${page - 1 || 0}`,
      { headers: headers }
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};

const GetRow = (data) => {
  const { permissao } = data.perfil
  const classSpan = permissao == "ADMIN" ? "badge bg-dark rounded-pill " : "badge bg-info rounded-pill"
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{data.usuario} </div>
      </div>
      <span className={classSpan}>{ permissao }</span>
      <RenderActionsList id={data.usuario} />
    </li>
  );
};

const RenderList = (data) => {
  const list = data.map((usuario) => GetRow(usuario));
  return <ol className="list-group ">{list}</ol>;
};

const RenderActionsList = props => {
  const {
    onRemoveUser,
    onEditUser,
    onPromoveUser
  } = useContext(UserContext)

  UserContext
  return(
      
    <div className="dropdown">
      <button
        className="btn btn-menu btn-sm d-inline-flex align-items-center rounded border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item disabled">
            <button className="btn d-inline-flex align-items-center rounded border-0 collapsed disabled" onClick={_ => onRemoveUser(props.id)}>
              Excluir
            </button>
        </li>
        <li className="dropdown-item disabled">
          <button className="btn d-inline-flex align-items-center rounded border-0 collapsed disabled" onClick={_ => onEditUser(props.id)}>
              Editar
            </button>
        </li>
        <li className="dropdown-item disabled">
          <button className="btn d-inline-flex align-items-center rounded border-0 collapsed disabled" onClick={_ => onPromoveUser(props.id)}>
              Promover
            </button>
        </li>
        {/* <li><hr className="dropdown-divider"/></li> */}
      </ul>
    </div>
  )
};