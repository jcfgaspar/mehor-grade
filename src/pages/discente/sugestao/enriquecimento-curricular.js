import ListEnriquecimentoCurricular from '@list/sugestao-materias-enriquecimento-curricular'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';


export default function PageEnriquecimentoCurricular(){
    return (
        <CenterDiv>
            <ListEnriquecimentoCurricular/>
        </CenterDiv>
    );
}

PageEnriquecimentoCurricular.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }