import styles from '../styles/clouds.module.css'

function Clouds () {
    return (
        <div className={styles.cloudContainer}>
            <div className={styles.cloudAnimation1}>
                <img src="/smoke03.jpg" alt="cloud" className={styles.cloudImage}/>
                <img src="/smoke03%20mirrored.jpg" alt="cloud mirrored" className={styles.cloudImage}/>
                <img src="/smoke03.jpg" alt="cloud" className={styles.cloudImage}/>
                <img src="/smoke03%20mirrored.jpg" alt="cloud mirrored" className={styles.cloudImage}/>
            </div>

            <div className={styles.cloudAnimation2}>
                <img src="/smoke04.jpg" alt="cloud" className={styles.cloudImage}/>
                <img src="/smoke04%20mirrored.jpg" alt="cloud mirrored" className={styles.cloudImage}/>
                <img src="/smoke04.jpg" alt="cloud" className={styles.cloudImage}/>
                <img src="/smoke04%20mirrored.jpg" alt="cloud mirrored" className={styles.cloudImage}/>
            </div>
        </div>

    )
}

export default Clouds;