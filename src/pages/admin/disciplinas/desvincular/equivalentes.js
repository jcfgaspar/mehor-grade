import FormDesvincularDisciplinas from '@forms-admin/desvincular-disciplinas-equivalentes'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';


export default function PageDesvincularDisciplinas(){
    return (
        <CenterDiv>
            <FormDesvincularDisciplinas/>
        </CenterDiv>
    );
}

PageDesvincularDisciplinas.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }