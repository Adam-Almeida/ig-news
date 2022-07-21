import Head from 'next/head'
import styles from './home.module.scss'

export default function Home(){
    return(
        <>
            <Head>
                <title>Início | Ibi.News</title>
            </Head>

            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <span>Hey, sejam bem vindos</span>
                    <h1>Notícias sobre o <span>Meu</span> mundo</h1>
                    <p>Tenha acesso a todas as publicações<br/>
                    <span>por R$ 9,90 por mês</span>
                    </p>
                </section>
                <img src="/images/ilustration.svg" alt="Isa pensativa" />
            </main>

        </>
    )
}