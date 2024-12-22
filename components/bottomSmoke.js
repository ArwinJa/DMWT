import styles from '../styles/bottomSmoke.module.css'

function BottomSmoke () {
    return (
        <div className={styles.smokeContainer}>
            <div className={styles.smokeAnimation}>
                <img src="/smoke11.jpg" alt="smoke" className={styles.smokeImage}/>
                <img src="/smoke11%20mirrored.jpg" alt="smoke mirrored" className={styles.smokeImage}/>
                <img src="/smoke11.jpg" alt="smoke" className={styles.smokeImage}/>
                <img src="/smoke11%20mirrored.jpg" alt="smoke mirrored" className={styles.smokeImage}/>
            </div>
            <img src="/bottom_smoke.svg" alt="bottom_smoke" className={styles.bottomSmoke}/>
        </div>

    )
}

export default BottomSmoke;