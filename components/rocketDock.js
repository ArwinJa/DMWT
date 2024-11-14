import styles from '../styles/rocketDock.module.css'

function RocketDockBack () {
    return (
        <img src="/rocket_dock_back.svg" alt="rocket_dock" className={styles.rocketDock}/>
    )
}

function RocketBase () {
    return (
        <img src="/rocket_base.svg" alt="rocket_base" className={styles.rocketBase}/>
    )
}

function RocketDockBackComplete() {
    return (
        <div>
            <RocketBase/>
            <RocketDockBack/>
        </div>
    )
}

export default RocketDockBackComplete;