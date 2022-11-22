import FormDesvincularDisciplinas from '@forms-admin/disciplina/desvincular/desvincular-disciplinas-pre-requisito'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin/index.js';

export default function PageDesvincularPrerequisito(){
    return (
        <CenterDiv>
            <FormDesvincularDisciplinas/>
        </CenterDiv>
    );
}

PageDesvincularPrerequisito.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }