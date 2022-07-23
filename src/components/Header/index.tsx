import SigInButton from '../SigInButton'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'

export function Header() {

    const { asPath } = useRouter()

    return(
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>
                <picture>
                    <img src="/images/logo.svg" alt="Ibi News" />
                </picture>
                <nav>
                    <ActiveLink activeClasName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClasName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SigInButton /> 
            </div>
            
        </header>
    )
}