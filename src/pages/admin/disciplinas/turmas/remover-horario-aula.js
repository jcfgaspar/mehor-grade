import FormAdicionarCurso from '@forms-admin/remover-horario-aula'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function PageRemoverCurso(){
    return (
        <CenterDiv>
            <FormAdicionarCurso/>
        </CenterDiv>
    );
}


PageRemoverCurso.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }