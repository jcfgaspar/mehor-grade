import FormAdicionarCurso from '@forms-admin/adicionar-curso'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function PageAdicionarCurso(){
    return (
        <CenterDiv>
            <FormAdicionarCurso/>
        </CenterDiv>
    );
}


PageAdicionarCurso.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }