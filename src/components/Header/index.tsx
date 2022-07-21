import SigInButton from '../SigInButton'
import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>
                <picture>
                    <img src="/images/logo.svg" alt="Ibi News" />
                </picture>
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="">Posts</a>
                </nav>
                <SigInButton /> 
            </div>
            
        </header>
    )
}