const Segunda = _ => {
    return (
        <ul class="list-group">
            <li class="list-group-item">Banco de dado I - S71 - Bloco A - (10h às 12h)</li>
            <li class="list-group-item">Programação II - S73 - Bloco B - (17h às 20h)</li>
         </ul>
    )
}

const Quarta = _ => {
    return (
        <ul class="list-group">
            <li class="list-group-item">Filosofia - A75 - Bloco C - (10h às 12h)</li>
         </ul>
    )
}

const Quinta = _ => {

        return (
            <ul class="list-group">
                <li class="list-group-item">Sociologia - B23 - Bloco D - (15h às 16h)</li>
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
            <div class="btn-group d-flex justify-content-cente" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btncheck1">Manhã</label>

            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btncheck2">Tarde</label>

            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btncheck3">Noite</label>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div class="row">
            <div class="col-4">
                <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Segunda-Feira</a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Quarta-Feira</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Quinta-feira</a>
                </div>
            </div>
            <div class="col-8">
                <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><Segunda/></div>
                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><Quarta /></div>
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><Quinta/></div>
                
                </div>
            </div>
</div>

        </>
    )
}