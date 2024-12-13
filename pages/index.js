import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useEffect} from "react";
import {useRouter} from 'next/navigation';

// Komponenten
import RocketDockBackComplete from '../components/rocketDock';
import RocketDockFront from '../components/rocketDockFront';
import Rocket from '../components/rocket';
import BottomSmoke from '../components/bottomSmoke';
import LandingPageText from '../components/landingPageText';
import RocketStartButton from '../components/rocketStartButton.jsx';
import '../components/fonts';
import BackgroundImage from '../components/backgroundImage';
import TextBoxMain from "../components/textBoxMain";
import ScrollUpButton from "../components/scrollUpButton.jsx";
import ScrollDownButton from "../components/scrollDownButton.jsx";
import TextBox1 from "../components/textBox1";


export default function Index() {
    const router = useRouter(); // Router für Kommentare

    // Ans Ende der Seite scrollen bei Laden
    useEffect(() => {
        // Scrollen zum Ende der Seite
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'instant'
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
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
                </style>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
                </style>
            </Head>


            <main className={styles.main}>
                <button className={styles.button1} onClick={() => router.replace('/comments')}>
                    Zu den Kommentaren
                </button>

                <TextBox1/>
                <HeaderTexts/>
                <RocketDockBackComplete/>
                <Rocket/>
                <RocketDockFront/>
                <BottomSmoke/>
                <ScrollUpButton />
                <ScrollDownButton />
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

// "MISSION NACHHALTIGKEIT: Die Zukunft der Raumfahrt beginnt jetzt" + "Starte die Rakete"
function HeaderTexts() {
    return (
        <div className={styles.landingPageFeaturesContainer}>
            <LandingPageText/>
            <RocketStartButton/>
        </div>
    )
}
