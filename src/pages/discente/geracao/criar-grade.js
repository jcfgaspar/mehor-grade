import ListGerarGradeHorario from '@list/gerar-grade-horaria'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';


export default function PageGerarGradeHoraria(){
    return (
        <CenterDiv>
            <ListGerarGradeHorario/>
        </CenterDiv>
    );
}

PageGerarGradeHoraria.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }