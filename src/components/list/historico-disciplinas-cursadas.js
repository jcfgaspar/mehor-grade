const getGrade = _ => {
    return (6 + (Math.random() * 4))
}

const Disciplina = props => {
    return (
        <li class="list-group-item"> {  props.name + " - Disciplina Cursada " } </li>
    )
}

const Lista = ({ children }) => {
    return (
        <ul class="list-group">
            { children }
        </ul>
    )
}

export default function ListHistoricoDisciplinaCursada(){
    return (
        <>
            <Lista>
                <h3>Disciplinas cursadas</h3>
                <br></br>
                { [ ...Array(10) ].map((_, index) => <Disciplina key={index} name={index}/>) }
            </Lista>
        </>
    )
}

