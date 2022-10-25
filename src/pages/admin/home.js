import CenterDiv from '@grids/Center'
import LayoutAdmin from 'src/components/layout/admin.js/index.js';

export default function PageAdminHome(){
    return (
        <CenterDiv>
            <h2>Bem vindo!</h2>
        </CenterDiv>
    );
}


PageAdminHome.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }