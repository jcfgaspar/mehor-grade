const getGrade = _ => (Math.random() * 7) + 1

const Disciplina = props => {
    return (
        <li className="list-group-item"> Disciplinas { props.name } - { getGrade().toFixed(0) }º Semestre</li>
    )
}

const Lista = ({ children }) => {
    return (
        <ul className="list-group">
            { children }
        </ul>
    )
}


export default function ListHistoricoDisciplinaFaltantes(){
    return (
        <>
            <h3>Disciplinas faltante</h3>
            <br></br>
            
            <Lista>
                { [ ...Array(10) ].map((_, index) => <Disciplina key={index} name={index}/>) }
            </Lista>
        </>
    )
}

