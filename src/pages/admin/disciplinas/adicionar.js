import FormCadastrarDisciplina from '@forms-admin/disciplina/adicionar-disciplina'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin/index.js';

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