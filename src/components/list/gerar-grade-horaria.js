const Segunda = _ => {
    return (
        <ul className="list-group">
            <li className="list-group-item">Banco de dado I - S71 - Bloco A - (10h às 12h)</li>
            <li className="list-group-item">Programação II - S73 - Bloco B - (17h às 20h)</li>
         </ul>
    )
}

const Quarta = _ => {
    return (
        <ul className="list-group">
            <li className="list-group-item">Filosofia - A75 - Bloco C - (10h às 12h)</li>
         </ul>
    )
}

const Quinta = _ => {

        return (
            <ul className="list-group">
                <li className="list-group-item">Sociologia - B23 - Bloco D - (15h às 16h)</li>
             </ul>
        ) 
    
}

export default function ListGeraracaoGrade(){
    return (
        <>
             <h3>Geração disciplina</h3>
            <hr></hr>
            <form>
                <div className="mb-3">
                    <label className="form-label">Carga horária máxima</label>
                    <input className="form-control" type="email"/>
                </div>
            </form>
            <div className="btn-group d-flex justify-content-cente" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="btncheck1">Manhã</label>

            <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="btncheck2">Tarde</label>

            <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="btncheck3">Noite</label>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="row">
            <div className="col-4">
                <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Segunda-Feira</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Quarta-Feira</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Quinta-feira</a>
                </div>
            </div>
            <div className="col-8">
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><Segunda/></div>
                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><Quarta /></div>
                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><Quinta/></div>
                
                </div>
            </div>
</div>

        </>
    )
}