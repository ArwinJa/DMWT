import styles from '../styles/landingPageText.module.css';
import RocketStartButton from "./rocketStartButton";
import {useState} from "react";

/*
function LandingPageText() {
    return (
        <div className={styles.landingPageTextContainerWithBackground}>
            <img src="/Logo%20New.svg" alt="logo"
                 className={styles.landingPageLogo}/>

            <h1 className={styles.landingPageTitleText}>
                MISSION NACHHALTIGKEIT:
            </h1>

            <h2 className={styles.landingPageSecondTitleText}>
                Nachhaltig denken, galaktisch handeln.
            </h2>
        </div>
    )
}*/


function LandingPageText() {
    const [animationName, setAnimationName] = useState('');

    // Funktion zum Triggern der Animation
    const playAnimation = (name) => {
        setAnimationName(name);
    };


    return (
        <div className={styles.landingPageTextContainerAlt}>
            <img src="/Logo%20New%20With%20Title.svg" alt="logo"
            className={styles.landingPageLogo}/>

            <h2 className={styles.landingPageSecondTitleText}>
                Nachhaltig denken, galaktisch handeln.
            </h2>

            <RocketStartButton playAnimation={playAnimation}/>
        </div>
    )
}

export default LandingPageText;