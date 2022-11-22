const Spin = props => {
    return (
      <>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
          { " " + props.text}
      </>
    )
  }
  
  const SubmitInput = (props) => {
    const { carregando } = props
    const text = carregando ? <Spin text={props.acao}/> : props.estatico
    return (
      <div className="d-grid gap-2">
         <button
          className="btn btn-outline-dark btn-lg float-end"
          type="submit"
          aria-disabled={carregando}
        >
          { text }
        </button>
  
      </div>
    );
  };

  export default SubmitInput