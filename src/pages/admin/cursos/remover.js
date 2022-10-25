import FormRemoverCursosOfertados from '@forms-admin/remover-turma'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function Login(){
    return (
        <CenterDiv>
            <FormRemoverCursosOfertados/>
        </CenterDiv>
    );
}

Login.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }