import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rina Joy Abu</title>
        <meta name="description" content="Rina's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <nav className={styles.nav}>

          <h1>Rina Joy Abu</h1>

          <div>
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>

        </nav>

        <section className={styles.section__about}>

          <div>
            <h2>Rina Joy Abu</h2>
            <h4>Software Engineer</h4>
          </div>
        
        </section>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
