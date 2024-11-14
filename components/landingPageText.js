import styles from '../styles/landingPageText.module.css'

function LandingPageText() {
    return (
        <div className={styles.landingPageTextContainerWithBackground}>
            <h1 className={styles.landingPageTitleText}>
                MISSION NACHHALTIGKEIT:
            </h1>
            <h2 className={styles.landingPageSecondTitleText}>
                Die Zukunft der Raumfahrt beginnt jetzt.
            </h2>
        </div>
    )
}

export default LandingPageText;