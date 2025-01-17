import styles from '../styles/rocketFloatingParts.module.css'

function RocketParts () {
    return (
        <div className={styles.rocketPartsContainer}>
            <div className={styles.partsAnimationBack} style={{top: '-2%'}}>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 2" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 2" className={styles.partsImage}/>
            </div>
            <div className={styles.partsAnimationFront} style={{top: '7%'}}>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 2" className={styles.partsImage}/>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 2" className={styles.partsImage}/>
            </div>
            <div className={styles.partsAnimationBack} style={{top: '10%'}}>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 2" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 2" className={styles.partsImage}/>
            </div>
            <div className={styles.partsAnimationFrontVariant} style={{top: '24%'}}>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 2" className={styles.partsImage}/>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Vorne.png" alt="rocket parts 2" className={styles.partsImage}/>
            </div>
            <div className={styles.partsAnimationBackVariant} style={{top: '28%'}}>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 2" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 1" className={styles.partsImage}/>
                <img src="/Raketenteile%20Hinten.png" alt="rocket parts 2" className={styles.partsImage}/>
            </div>
        </div>
    )
}

export default RocketParts;