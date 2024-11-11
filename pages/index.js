import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useEffect} from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter(); // Router für Kommentare

    // Ans Ende der Seite scrollen bei Laden
    useEffect(() => {
        // Scrollen zum Ende der Seite
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Für sanftes Scrollen
        });
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Nachhaltigkeit in der Raumfahrt</title>
                <link rel="icon" href="/favicon.ico"/>

                // Google Fonts
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
                </style>
        </Head>

        <main className={styles.main}>

            <button className={styles.button1} onClick={() => router.replace('/comments')}>
                Zu den Kommentaren
            </button>
            <BottomSmoke/>
            <RocketBase/>
            <RocketDockBack/>
            <RocketV1/>
            <RocketDockFront/>
            <BackgroundImage/>
        </main>

            <style jsx>{`
            main {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            footer img {
                margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    );
}

function LandingPage() {
    useEffect(() => {
        // Scrollen zum Ende der Seite
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Für sanftes Scrollen
        });
    }, []);

    return (
        <div style={
            {
                backgroundImage: `url(https://media.news.de/resources/images/59/4a/b89a8e151b9538278a8db90aa80a.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }}>
            <h1 className={styles.title}>
                Nachhaltigkeit in der Raumfahrt
            </h1>
            <button className={styles.button1} onClick={ScrollToBottom}>
                Erfahre mehr
            </button>
            <h2 className={styles.scrollMessage}>
                ↑ Bitte nach oben scrollen :) ↑
            </h2>
        </div>
    )
}

function ScrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Für sanftes Scrollen
    });
}

function TextBox() {
    return (
        <div>
            <div className={styles.textBox}>
                <div className={styles.defaultText}>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </div>
            </div>
        </div>
    )
}

function BackgroundImage() {
    return (
        <img src="/background_complete.svg" alt="background_complete" className={styles.background_complete}/>
    )
}

function RocketV1() {
    return (
        <img src="/rakete_v1.svg" alt="rakete_v1" className={styles.rocket}/>
    )
}

function RocketDockFront() {
    return (
        <img src="/rocket_dock_front.svg" alt="rocket_dock" className={styles.rocketDock}/>
    )
}

function RocketDockBack () {
    return (
        <img src="/rocket_dock_back.svg" alt="rocket_dock" className={styles.rocketDock}/>
    )
}

function RocketBase () {
    return (
        <img src="/rocket_base.svg" alt="rocket_base" className={styles.rocketBase}/>
    )
}

function BottomSmoke () {
    return (
        <img src="/bottom_smoke.svg" alt="bottom_smoke" className={styles.bottomSmoke}/>
    )
}