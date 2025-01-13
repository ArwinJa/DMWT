import { useState } from 'react';
import styles from '../styles/rocketStartButton.module.css';

function RocketStartButton({ playAnimation }) {
    const [animationName, setAnimationName] = useState('');

    const handleScrollWithID = (elementId) => {
            // Kurze Wartezeit vor dem Scrollen
        setTimeout(() => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                // Zielposition des Elements berechnen
                const targetPosition = targetElement.offsetTop - 130; // -130 um noch bisschen weiter hoch zu scrollen

                // Smooth Scroll zur Zielposition
                slowScrollTo(targetPosition, 2000);

                // Trigger scroll_section5 nach dem Scrollen
                playAnimation('scroll_section5');
            } else {
                console.error(`Element mit ID ${elementId} nicht gefunden.`);
            }
        }, 500); // 500ms Wartezeit
    };


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
                    onClick={() => {handleScrollWithID("raketenstarts")}}
            >
                Starte deine Reise!
            </button>
        </div>
    );
}

export default RocketStartButton;