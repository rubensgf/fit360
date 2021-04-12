import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div >
         <p><Link href="/signin">Login</Link></p>
         <p><Link href="/register/step_one">Passo 1</Link></p>
         <p><Link href="/register/step_two">Passo 2</Link></p>
         <p><Link href="/register/step_there">Passo 3</Link></p>
         <p><Link href="/dashboard">home</Link></p>
         <p><Link href="/payment">Pagamento</Link></p>
         <p><Link href="/invoices">Faturas</Link></p> 
         <p><Link href="/plans">Planos</Link></p>
         <p><Link href="/assessments">Avaliações</Link></p>
         <p><Link href="/settings">Configurações - </Link></p>
         <p><Link href="/settings/password">Config. Alterar senha</Link></p>
         <p><Link href="/settings/address">Config. Endereco</Link></p>
         <p><Link href="/settings/cards">Config. Cartões</Link></p>
         <p>Config. cadastrar novos Cartões</p>
         <p><Link href="/settings/plans">Config. Planos</Link></p>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
