import SigInButton from '../SigInButton'
import styles from './styles.module.scss'
import Link from 'next/link'

export function Header() {
    return(
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>
                <picture>
                    <img src="/images/logo.svg" alt="Ibi News" />
                </picture>
                <nav>
                    <Link href="/">
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>
                </nav>
                <SigInButton /> 
            </div>
            
        </header>
    )
}