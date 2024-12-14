import styles from '../styles/navbar.module.css'

function Navbar() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
        }
    };

    return (
        <nav className={styles.nav}>
            
            <img src="/Logo_white.png" alt="logo" />
            <div>
                <button className={styles.link} onClick={() => handleScroll("raketenstarts")} >Raketenstarts</button>
                <button className={styles.link} onClick={() => handleScroll("treibstoffe")} >Treibstoffe</button>
                <button className={styles.link} onClick={() => handleScroll("im_orbit")} >Im Orbit</button>
                <button className={styles.link} onClick={() => handleScroll("weltraummuell")} >Weltraummüll</button>
                <button className={styles.link} onClick={() => handleScroll("loesungsansaetze")} >Lösungsansätze</button>
            </div>
        </nav>
    );
};

export default Navbar;