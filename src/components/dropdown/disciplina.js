
const RenderDisciplina = props => {
    const OptionsDisciplina= _ => {
      return props.disciplinas.map(disciplina => {
        return (
          <option key={disciplina.codigo} value={disciplina.codigo}>
            {disciplina.nome}
          </option>
        )
      })
    };
  
    return (
      <select className="form-select" {...props.register("disciplina", { required: true })}>
        <option key="codigo" value="0"> Selecione</option>
        <OptionsDisciplina />
      </select>
    );
  };
  
  export default function DropDownDisciplina(props) {
    return (
      props.disciplinas.length > 0 
      ? <RenderDisciplina disciplinas={props.disciplinas} register={props.register }/>
      : null
    )
  
  }
  