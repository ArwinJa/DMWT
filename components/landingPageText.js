import styles from '../styles/landingPageText.module.css'

function LandingPageText() {
    return (
        <div className={styles.landingPageTextContainerWithBackground}>
            <h1 className={styles.landingPageTitleText}>
                MISSION NACHHALTIGKEIT:
            </h1>
            <h2 className={styles.landingPageSecondTitleText}>
                Nachhaltig denken, galaktisch handeln.
            </h2>
        </div>
    )
}

export default LandingPageText;