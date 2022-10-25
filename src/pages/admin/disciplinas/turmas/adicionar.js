import FormAdicionarCurso from '@forms-admin/adicionar-turma'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function PageAdicionarTurma(){
    return (
        <CenterDiv>
            <FormAdicionarCurso/>
        </CenterDiv>
    );
}


PageAdicionarTurma.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }