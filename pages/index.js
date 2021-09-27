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

        <section className={styles.section__aboutMe}>
          <div>
            <h4>About Me</h4>
            <p>Driven by my compassion for my family and close friends, I see challenges through a growth mindset lens and believe my abilities can always be developed through hard work and dedication. With the problem solving skills I’ve learned in my past experience in the medical coding world, I’m motivated to use my new fluencies in various programming technologies to join a software engineering team where we can help establish a more efficient and accessible world.</p>
          </div>
          <Image src='/headshot.jpg' alt='me' height='950' width='750' />
        </section>

        <section className={styles.section__contact}>
          <h4>Contact Me</h4>
          <p>Email me at: rinajabu@gmail.com</p>
          <p>Or send me a message on LinkedIn!</p>
        </section>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
