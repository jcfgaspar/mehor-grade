
const RenderCurso = props => {
  const OptionsCurso = _ => {
    return props.cursos.map(curso => {
      return (
        <option key={curso.codigo} value={curso.codigo}>
          {curso.nome}
        </option>
      )
    })
  };

  return (
    <select className="form-select" {...props.register("curso", { required: true })}>
      <option key="codigo" value="0"> Selecione</option>
      <OptionsCurso />
    </select>
  );
};

export default function DropDownCursos(props) {
  console.log("renderizando dropdown!")
  return (
    props.cursos.length > 0 
    ? <RenderCurso cursos={props.cursos} register={props.register }/>
    : null
  )

}
