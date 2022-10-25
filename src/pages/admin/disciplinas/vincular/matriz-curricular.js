import FormVincularDisciplinas from '@forms-admin/vincular-disciplinas-matriz-curricular'
import CenterDiv from '@grids/Center.js'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';


export default function PageVincularDisciplinaMatrizCurricular(){
    return (
        <CenterDiv>
            <FormVincularDisciplinas/>
        </CenterDiv>
    );
}

PageVincularDisciplinaMatrizCurricular.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }