import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useEffect} from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nachhaltigkeit in der Raumfahrt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

          <LandingPage />

      </main>

      <footer>

      </footer>

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
      </div>
  )
}

function ScrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Für sanftes Scrollen
    });
}