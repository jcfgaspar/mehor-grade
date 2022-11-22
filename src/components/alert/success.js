export default function AlertSuccess(props){
    return (
        <div className="alert alert-success" role="alert">
            { props.children }
        </div>
    )
}