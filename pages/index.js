import Head from 'next/head';
import App from './App';
import styles from '../styles/Home.module.css';
import {useEffect} from "react";
import { useRouter } from 'next/navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function Home() {
    // const navigate = useNavigate();
    const router = useRouter();

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

        <main>
            <button className={styles.button1} onClick={() => router.replace('/comments')}>
                Zu den Kommentaren
            </button>
            <Page6/>
            <Page5/>
            <Page4/>
            <Page3/>
            <Page2/>
            <RocketScroller/>
            <LandingPage/>
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

function Page2() {
    return (
        <div className = {styles.container}
             style={{
                 backgroundColor: "lightblue",
             }}>
            <TextBox />
        </div>
    )
}

function Page3() {
    return (
        <div className = {styles.container}
             style={{
                 backgroundColor: "darkblue",
             }}>
            <TextBox />
        </div>
    )
}

function Page4() {
    return (
        <div>
            <div className={styles.strip3}></div>
            <div className={styles.strip2}></div>
            <div className={styles.strip1}></div>
        </div>
    )
}

function Page5() {
    return (
        <div className={styles.container}
             style={{
                 backgroundColor: "black",
             }}>
            <TextBox />
        </div>
    )
}

function Page6() {
    return (
        <div className={styles.container}
             style={{
                 backgroundColor: "black",
             }}>
            <TextBox/>

        </div>
    )
}


const rocket = {
    imagePath: "https://www.pngitem.com/pimgs/m/108-1082349_space-rocket-png-download-image-real-space-rocket.png",
    imageSize: 250
}

function RocketScroller() {
    return (
        <div className = {styles.rocketScroller}>
            <img
                src={rocket.imagePath}
                style={{
                    width: rocket.imageSize,
                    height: rocket.imageSize,
                }}
            />
        </div>
    )
}