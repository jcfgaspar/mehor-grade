import FormDisciplinasFaltantes from '@list/disciplinas-faltantes'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';


export default function PageDiscenteDisciplinaFaltantes(){
    return (
        <CenterDiv>
            <FormDisciplinasFaltantes/>
        </CenterDiv>
    );
}

PageDiscenteDisciplinaFaltantes.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }