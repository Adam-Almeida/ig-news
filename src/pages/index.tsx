import { GetServerSideProps } from 'next'
import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
    product: {
        priceId: string,
        amount: number
    }
}

export default function Home({ product }: HomeProps){

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
                    <span>por {product.amount} por mês</span>
                    </p>
                    <SubscribeButton priceId={product.priceId} />
                </section>
                <img src="/images/ilustration.svg" alt="Isa pensativa" />
            </main>

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const price = await stripe.prices.retrieve('price_1LNoD3H6trkR4HMSHOSgoCWx')

    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format((price.unit_amount! / 100))
    }

    return {
        props: {
            product
        }
    }
}