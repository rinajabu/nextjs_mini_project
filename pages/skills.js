import Head from 'next/head'
import Link from "next/link"

export default function Skills() {
    return (
        <div>
            <Head>
                <title>Rina Joy Abu's Skills</title>
                <meta name="description" content="Rina's skills" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav>
                <Link href="/">
                    <a><h1>Rina Joy Abu</h1></a>
                </Link>
                <div>
                    <a href="">About</a>
                    <Link href="/skills">
                    <a>Skills</a>
                    </Link>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </div>
            </nav>

            <h2>SKILLS</h2>
        </div>
    );
}