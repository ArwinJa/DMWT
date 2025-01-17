import styles from '../styles/navbar.module.css'
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

function Navbar() {
    const [src, setSrc] = useState('/Logo New With Title.svg');
    const router = useRouter(); /* für das Verlinken zurück von newsletter.js auf index.js */

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
        }
    };

    /* Sodass auf newsletter.js zurückgelinkt wird, auf index.js aber nicht: */
    const handleClick = (e, id) => {
        if (router.pathname === '/') {
            // Auf der index.js Seite nur scrollen
            e.preventDefault(); // Verhindert das Ausführen des Links
            handleScroll(id);
        } else {
            setTimeout(() => { /* kurz warten, damit man auf der Hauptseite ankommt, dann ausführen */
                handleScroll(id)
            }, 250)
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
                <Link href={'/'} className={styles.link} onClick={(e) => handleClick(e, 'raketenstarts')}>
                    Raketenstarts
                </Link>
                <Link href={'/'} className={styles.link} onClick={(e) => handleClick(e, 'abgase')}>
                    Abgase
                </Link>
                <Link href={'/'} className={styles.link} onClick={(e) => handleClick(e, 'im_orbit')}>
                    Im Orbit
                </Link>
                <Link href={'/'} className={styles.link} onClick={(e) => handleClick(e, 'weltraummuell')}>
                    Weltraummüll
                </Link>
                <Link href={'/'} className={styles.link} onClick={(e) => handleClick(e, 'infografik')}>
                    Infografik
                </Link>
                <Link href={'/'} className={styles.link} onClick={(e) => handleClick(e, 'loesungsansaetze')}>
                    Lösungsansätze
                </Link>
                <Link href={'/'} className={styles.link} onClick={(e) => handleClick(e, 'newsletter')}>
                    Newsletter-Anmeldung
                </Link>
            </div>
            <div className={styles.scrollDownButtonContainer}>
                <div className={styles.buttonsPlaceholder}></div>
            </div>
        </nav>
    );
};

export default Navbar;