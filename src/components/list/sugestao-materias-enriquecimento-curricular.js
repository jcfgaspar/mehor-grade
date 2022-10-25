import { useState } from 'react'
const getGrade = (_) => Math.random() * 30 * 10;

const ListGroupItem = (props) => {
  return (
    <div>
      <hr/>
      <a class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Disciplina</h5>
          <small class="text-muted">{getGrade().toFixed(0)} horas</small>
        </div>
        <p class="mb-1">Descrição da matéria.</p>
        <small class="text-muted">
          Disciplina sugerida conforme seu perfil.
        </small>
      </a>
    </div>
  );
};

const ListGroup = ({ children }) => {
  return <div>{children}</div>;
};

const SecondView = _ => {
  return (
    <ListGroup>
    <h4>Disciplinas sugeridas</h4>
    <p>Para enriquecimento curricular</p>
  {[...Array(3)].map((_, index) => (
    <ListGroupItem key={index} />
  ))}
</ListGroup>
  )
}


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

export default function ListSugestaoEnriquecimentoCurricular() {
  const [flag, setFlag] = useState(0)

  return (
    <>
      { flag == 0 && <FirstView callback={setFlag}/> }
      { flag == 1 && <SecondView/> }
    </>
  );
}
