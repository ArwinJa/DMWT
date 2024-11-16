import styles from '../styles/rocketStartButton.module.css';

function RocketStartButton() {
    return (
        <div className={styles.landingPageButtonContainer}>
            <button className={styles.landingPageButton}>
                Starte deine Reise!
            </button>
        </div>
    )
}

export default RocketStartButton;