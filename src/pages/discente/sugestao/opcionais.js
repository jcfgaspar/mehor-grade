import ListGerarGradeHorario from '@list/sugestao-materias-opcionais'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';


const style = {
    "margin": "0 auto",
    "min-width": "550px",
    "border-radius": "10px",
    "backgroundColor": "rgb(235, 235, 235)",
    "padding": "50px",
    "boxShadow":  "0 0.5em 1.5em rgb(0 0 0 / 10%), 0 0.125em 0.5em rgb(0 0 0 / 15%)",
    "border": "1px solid #ced4da",
    "marginTop": "70px",
    "overflow": "hidden"
}


export default function PageGerarGradeHoraria(){
  return (
    <div style={{width: "36vw", height: "100vh",  margin: "0 auto", overflow: "hidden"}}>
      <div className="row align-items-center" style={{ ...style, width: "700px !important" }}>
        <ListGerarGradeHorario />
      </div>
    </div>
  );
}

PageGerarGradeHoraria.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }