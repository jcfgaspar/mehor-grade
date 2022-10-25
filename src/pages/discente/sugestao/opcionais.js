import ListEnriquecimentOpcionais from '@list/sugestao-materias-opcionais'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';


export default function PageSugestaoOpcionais(){
    return (
        <CenterDiv>
            <ListEnriquecimentOpcionais/>
        </CenterDiv>
    );
}

PageSugestaoOpcionais.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }