import styles from '../styles/rocketStartButton.module.css';

function RocketStartButton() {
    return (
        <div className={styles.landingPageButtonContainer}>
            <button className={styles.landingPageButton}>
                Starte die Rakete
            </button>
        </div>
    )
}

export default RocketStartButton;