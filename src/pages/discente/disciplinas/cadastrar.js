import FormAdicionarCurso from '@forms-discente/cadastrar-disciplinas-cursadas'
import CenterDiv from '@grids/Center'
import LayoutDiscente from 'src/components/layout/discente/index.js';

export default function PageDiscenteCadastrarDisciplina(){
    return (
        <CenterDiv>
            <FormAdicionarCurso/>
        </CenterDiv>
    );
}

PageDiscenteCadastrarDisciplina.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }