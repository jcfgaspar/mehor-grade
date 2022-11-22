import FormDesvincularDisciplinas from '@forms-admin/disciplina/desvincular/desvincular-disciplinas-equivalentes'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin/index.js';


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