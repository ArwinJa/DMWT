import { useState } from 'react';
import styles from '../styles/rocketStartButton.module.css';
import Rocket from './rocket'

function RocketStartButton({ playAnimation }) {
    const [animationName, setAnimationName] = useState('');

    const handleScrollToTop = () => {
        // Kurze Wartezeit vor dem Scrollen
        setTimeout(() => {
            slowScrollTo(window.scrollY - 900, 2000); // Zielposition und Dauer anpassen

            // Trigger scroll_section5 nach dem Scrollen
            playAnimation('scroll_section5');
        }, 500); // 300ms Wartezeit
    };

    const slowScrollTo = (targetPosition, duration) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();

        // Eigene Scroll-Funktion, um langsamer scrollen zu können
        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Zwischen 0 und 1 begrenzen

            // Easing-Funktion für sanftes Scrollen
            const ease = (t) => t * (2 - t);

            window.scrollTo(0, startPosition + distance * ease(progress));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <div className={styles.landingPageButtonContainer}>
            <button className={styles.landingPageButton}
                    onClick={handleScrollToTop}
            >
                Starte deine Reise!
            </button>
        </div>
    );
}

export default RocketStartButton;


/*
function RocketStartButton({ playAnimation }) {
    const handleScrollToTop = () => {
        // Kurze Wartezeit vor dem Scrollen
        setTimeout(() => {
            window.scrollTo({
                top: window.scrollY - 900,
                behavior: 'smooth', // sorgt für sanftes Scrollen
            });

            // Trigger scroll_section5 nach dem Scrollen
            playAnimation('scroll_section5');
        }, 500); // 500ms Wartezeit
    };

    return (
        <div className={styles.landingPageButtonContainer}>
            <button className={styles.landingPageButton}
                    onClick={handleScrollToTop}
            >
                Starte deine Reise!
            </button>
        </div>
    );
}


export default RocketStartButton;
*/