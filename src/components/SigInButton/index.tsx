import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
 
import styles from './styles.module.scss'


export default function SigInButton(){
    
    const isUserLogged = false

    return isUserLogged ? (
        <button type="button" className={styles.sigInButton}>
            <FaGithub color='#5cfb6c'/>
            Adam Almeida
            <FiX className={styles.closeIcon} color='#737380' />
        </button>
    ):(
        <button type="button" className={styles.sigInButton}>
            <FaGithub color='#FD89BA'/>
            Entrar com o Gihtub
        </button>
    )
}