import FormDisciplinasFaltantes from '@list/disciplinas-faltantes'
import LayoutDiscente from 'src/components/layout/discente/index.js';
import ListaGrid from '@grids/Lista'

export default function PageDiscenteDisciplinaFaltantes(){
    return (
      <div>
        <ListaGrid>
          <p className='list-h1'>Disciplinas faltantes</p>
          <FormDisciplinasFaltantes/>
          <br></br>
          <br></br>
          <br></br>
        </ListaGrid>
      </div>
    );
}

PageDiscenteDisciplinaFaltantes.getLayout = function getLayout(page) {
    return (
      <LayoutDiscente>
        { page }
      </LayoutDiscente>
    )
  }