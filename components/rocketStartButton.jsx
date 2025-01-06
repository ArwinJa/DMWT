import { useState } from 'react';
import styles from '../styles/rocketStartButton.module.css';
import Rocket from './rocket'

function RocketStartButton({ playAnimation }) {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: window.scrollY - 900,
            behavior: 'smooth',
        });

        // Trigger scroll_section5 nach dem Scrollen
            playAnimation('scroll_section5');
    };

    return (
        <div className={styles.landingPageButtonContainer}>
            <button className={styles.landingPageButton}
                    onClick={handleScrollToTop}
            >
                Starte deine Reise!
            </button>
        </div>
    )
}

export default RocketStartButton;