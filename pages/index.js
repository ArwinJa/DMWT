import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useEffect, useState} from "react";
import Link from 'next/link';

// Komponenten
import RocketDockBackComplete from '../components/rocketDock';
import RocketDockFront from '../components/rocketDockFront';
import Rocket from '../components/rocket.jsx';
import BottomSmoke from '../components/bottomSmoke';
import LandingPageText from '../components/landingPageText';
import BackgroundHome from '../components/backgroundHome';
import ScrollDownButton from "../components/scrollDownButton";
import ScrollUpButton from "../components/scrollUpButton.jsx";
import TextBox1 from "../components/textBox1";
import TextBox2 from "../components/textBox2";
import TextBox3 from '../components/textBox3';
import TextBox4 from '../components/textBox4';
import TextBox5 from '../components/textBox5';
import TextBoxAnmeldeaufruf from '../components/textBoxAnmeldeaufruf.js';
import Footer from '../components/footer.js';
import Clouds from '../components/clouds';
import Infographic from '../components/infographic.js';
import {AnimationProvider} from "../contexts/animationContext";
import NavbarShowButton from "../components/navbarShowButton";
import RocketParts from "../components/rocketFloatingParts";


export default function Index() {
    // Ans Ende der Seite scrollen bei Laden
    useEffect(() => {
        const handleLoad = () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        };
        window.addEventListener('load', handleLoad);

        setTimeout(() => {
            // Um das Scrollen auch beim Aktualisieren sicher zu machen, sonst geht es manchmal nicht
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'instant'
            });
        }, 100) /* kurzes Warten, damit auch sicher alles geladen wurde */

        // Cleanup
        return () => window.removeEventListener('load', handleLoad);
    }, []);


    return (
        <AnimationProvider>
            <div className={styles.container}>
                <Head>
                    <title>Nachhaltigkeit in der Raumfahrt</title>
                    <link rel="icon" href="/favicon.ico"/>

                    {/* Google Fonts */}
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

                    <RocketParts/>
                    <TextBoxAnmeldeaufruf/>
                    <Infographic/>
                    <TextBox5/>
                    <TextBox4/>
                    <TextBox3/>
                    <TextBox2/>
                    <TextBox1/>
                    <NavbarButtons/>
                    <HeaderTexts/>
                    <RocketDockBackComplete/>
                    <Rocket/>
                    <RocketDockFront/>
                    <Clouds/>
                    <BottomSmoke/>
                    <ScrollUpButton/>
                    <BackgroundHome/>
                    <Footer/>
                </main>


                <style jsx>{`
                    main {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }


                    code {
                        background: #fafafa;
                        border-radius: 5px;
                        padding: 0.75rem;
                        font-size: 1.1rem;
                        font-family: Menlo,
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
                        font-family: -apple-system,
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
        </AnimationProvider>
    );
}

// "MISSION NACHHALTIGKEIT: ..." + "Starte die Rakete"
function HeaderTexts() {

    return (
        <div className={styles.landingPageFeaturesContainer}>
            <LandingPageText />
        </div>
    )
}

function NavbarButtons() {

    return (
        <div className={styles.navbarButtonsContainer}>
            <ScrollDownButton/>
            <NavbarShowButton initiallyVisible={false}/>
        </div>
    )
}
