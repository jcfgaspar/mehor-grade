import FormCadastrarDisciplina from '/src/components/forms/discente/cadastrar-disciplinas-cursadas'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/discente/index.js';

export default function PageRemoverDisciplinas(){
    return (
        <CenterDiv>
            <FormCadastrarDisciplina/>
        </CenterDiv>
    );
}


PageRemoverDisciplinas.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }