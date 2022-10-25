import FormRemoverDisciplinas from '@forms-admin/remover-disciplinas'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function PageRemoverDisciplinas(){
    return (
        <CenterDiv>
            <FormRemoverDisciplinas/>
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