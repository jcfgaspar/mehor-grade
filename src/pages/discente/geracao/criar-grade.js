import ListGerarGradeHorario from '@list/gerar-grade-horaria'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';


const style = {
    "margin": "0 auto",
    "min-width": "550px",
    "border-radius": "10px",
    "background-color": "rgb(235, 235, 235)",
    "padding": "50px",
    "box-shadow":  "0 0.5em 1.5em rgb(0 0 0 / 10%), 0 0.125em 0.5em rgb(0 0 0 / 15%)",
    "border": "1px solid #ced4da",
    "margin-top": "70px"
}


export default function PageGerarGradeHoraria(){


    return (
        <div className="row align-items-center" style={{ ...style, width: "900px !important", margin: "0 auto"}}>
          <ListGerarGradeHorario style={{width: "800px !important"}} />
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