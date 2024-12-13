import { useState } from 'react';
import styles from '../styles/rocketStartButton.module.css';

function RocketStartButton() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: window.scrollY - 900, // 900 Pixel hochscrollen
            behavior: 'smooth', // Sanftes Scrollen
        });
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