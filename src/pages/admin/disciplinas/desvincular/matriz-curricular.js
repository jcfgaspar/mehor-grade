import FormDesvincularDisciplinas from '@forms-admin/desvincular-disciplinas-matriz-curricular'
import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function PageDesvincularDisciplinaMatrizCurricular(){
    return (
        <CenterDiv>
            <FormDesvincularDisciplinas/>
        </CenterDiv>
    );
}

PageDesvincularDisciplinaMatrizCurricular.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }