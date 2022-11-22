import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Pagination = props => {
    const { totalPages, current } = props

    const PageItem = props => {
        return (
            <li key={props.page.toString()} className={ props.page == current? "page-item active" : "page-item" }>
                <span className="page-link" onClick={_ => props.callBack(props.page)}>{ props.page }</span>
            </li>
        )
    }

    const RenderPagination = props => {
        const list = []
        if(totalPages == 1)
            list.push(<PageItem key="1" page="1" callBack={props.callBack}/>)
        else
            for(let index=1; index <= totalPages -1 ; index++)
                list.push(<PageItem page={index} callBack={props.callBack}/>)
        return list
    }
     
    return (
        <>
        { props.skeleton ? <Skeleton height={70} count={10} baseColor="#c7c7c7" highlightColor="#dcdcdc" borderRadius="0.5rem"/> : props.children }
        <br/>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center" key="teste"> 
                <li key="first" className={ 1 == current? "page-item disabled" : "page-item" }><a className="page-link" href="#" onClick={_ => props.callBack(current-1)}>Anterior</a></li>
                <RenderPagination callBack={props.callBack}/>
                <li key="last" className={ totalPages == current+1 || totalPages == current ? "page-item disabled" : "page-item" }><a className="page-link" href="#" onClick={_ => props.callBack(current+1)}>Próxima</a></li>
            </ul>
        </nav>
        </>
    ) 
}

export default Pagination