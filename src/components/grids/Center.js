import styles from  '../../styles/Grid.module.css'


export default function Center(props){
    return(
        <div className={ styles.container_login }>
            <div className={ styles.form_login }>
                { props.children }
            </div>
        </div>
    )
}