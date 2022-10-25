import FormVincularDisciplinas from '@forms-admin/vincular-disciplinas-equivalentes'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function PageVincularDisciplinaEquivalentes(){
    return (
        <CenterDiv>
            <FormVincularDisciplinas/>
        </CenterDiv>
    );
}

PageVincularDisciplinaEquivalentes.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }