import styles from '../styles/landingPageText.module.css'

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
    return (
        <div className={styles.landingPageTextContainerAlt}>
            <img src="/Logo%20New%20With%20Title.svg" alt="logo"
            className={styles.landingPageLogo}/>

            <h2 className={styles.landingPageSecondTitleText}>
                Nachhaltig denken, galaktisch handeln.
            </h2>
        </div>
    )
}

export default LandingPageText;