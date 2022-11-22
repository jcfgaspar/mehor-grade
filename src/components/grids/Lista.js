import styles from  '../../styles/Grid.module.css'

export default function Center(props){
    return(
        <div className={ styles.list_container }>
                { props.children }
        </div>
    )
}