
import FormVincularDisciplinas from '@forms-admin/disciplina/vincular/vincular-disciplinas-pre-requisito'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin/index.js';


export default function PageVincularDisciplinaPrerequisito(){
    return (
        <CenterDiv>
            <FormVincularDisciplinas/>
        </CenterDiv>
    );
}

PageVincularDisciplinaPrerequisito.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }