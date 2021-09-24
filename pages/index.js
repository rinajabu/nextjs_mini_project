import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rina Joy Abu</title>
        <meta name="description" content="Rina's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <nav>
        
          <h1>Rina Joy Abu</h1>

          <div>
            <a href="">About Me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>

        </nav>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
