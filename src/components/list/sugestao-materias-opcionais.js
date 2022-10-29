import { useState } from 'react'

const getGrade = _ => (Math.random() * 30) * 10

const ListGroupItem = (props) => {
  return (
    <div>
      <hr/>
      <a className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Matéria opcional</h5>
          <small className="text-muted">{ getGrade().toFixed(0) } horas</small>
        </div>
        <p className="mb-1">Descrição da matéria opcional aqui</p>
        <small className="text-muted">Professor XXXX</small>
      </a>
    </div>
  );
};

const SecondView = _ => {
  return (
    <ListGroup>
  <h4>Opcionais</h4>
  <p>Disciplinas sugeridas conforme seu desempenho</p>
{[...Array(4)].map((_, index) => (
  <ListGroupItem key={index} />
))}
</ListGroup>
  )
}

const ListGroup = ({ children }) => {
  return <div>{children}</div>;
};

const FirstView = props => {
  return (
    <form >
      <div className="mb-3">
        <label className="form-label">Dia</label>
        <input className="form-control" type="text"/>
      </div>
      <div className="mb-3">
          <label className="form-label">Horário</label>
          <input type="text" className="form-control" />
      </div>
      <div className="d-grid gap-2">
          <button type="button" className="btn btn-outline-primary btn-lg float-end" onClick={_ => props.callback(true)}>Procurar</button>
      </div>
    </form>
  )
}

export default function ListSugestaoMateriasOpcionais() {
  const [flag, setFlag] = useState(0)

  return (
    <>
      { flag == 0 && <FirstView callback={setFlag}/> }
      { flag == 1 && <SecondView/> }
    </>
  );
}
