import FormDisciplinasCursadas from '@list/historico-disciplinas-cursadas'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';

export default function PageDiscenteDisciplinaCursadas(){
    return (
        <CenterDiv>
            <FormDisciplinasCursadas/>
        </CenterDiv>
    );
}

PageDiscenteDisciplinaCursadas.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }