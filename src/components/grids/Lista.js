import styles from  '../../styles/Grid.module.css'

export default function Center(props){
    return(
        <div className={ styles.list_container }>
            <div className={ styles.list_div }>
                { props.children }
            </div>
        </div>
    )
}