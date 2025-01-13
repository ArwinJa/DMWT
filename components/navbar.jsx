import styles from '../styles/navbar.module.css'
import {useState} from "react";

function Navbar() {
    const [src, setSrc] = useState('/Logo New With Title.svg');

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
        }
    };

    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,       // Scroll ganz nach oben
            behavior: 'smooth', // Sanftes Scrollen
        });
    };

    return (
        <nav className={styles.nav}>
            <img src={src} alt="logo" className={styles.logo}
                 onMouseOver={() => setSrc('/Logo New Glowing With Title.svg')}
                 onMouseOut={() => setSrc('/Logo New With Title.svg')}
                 onClick={handleScrollToBottom}
            />
            <div className={styles.linkcontainer}>
                <button className={styles.link} onClick={() => handleScroll("raketenstarts")} >Raketenstarts</button>
                <button className={styles.link} onClick={() => handleScroll("treibstoffe")} >Treibstoffe</button>
                <button className={styles.link} onClick={() => handleScroll("im_orbit")} >Im Orbit</button>
                <button className={styles.link} onClick={() => handleScroll("weltraummuell")} >Weltraummüll</button>
                <button className={styles.link} onClick={() => handleScroll("loesungsansaetze")} >Lösungsansätze</button>
            </div>
            <div className={styles.scrollDownButtonContainer}>
                <div className={styles.buttonsPlaceholder}></div>
            </div>
        </nav>
    );
};

export default Navbar;