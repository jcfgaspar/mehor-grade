import ListDisciplinas from '@list/usuarios'
import LayoutAdmin from 'src/components/layout/admin/index.js';
import ListaGrid from '@grids/Lista'

export default function PageRemoverDisciplinas(){
    return (
        <ListaGrid>
            <ListDisciplinas/>
        </ListaGrid>

    );
}


PageRemoverDisciplinas.getLayout = function getLayout(page) {
    return (
      <LayoutAdmin>
        {page}
      </LayoutAdmin>
    )
  }