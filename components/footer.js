import Link from "next/link"; // Importiert die Next.js Link-Komponente für interne Verlinkungen
import styles from '../styles/footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Logo */}
            <img src="/Logo%20New%20With%20Black%20Title.svg" alt="logo" />

            {/* Interner Link zum Newsletter */}
            <Link href='/newsletter' className={styles.textLink}>Newsletter</Link>

            <div id="socialmedia" className={styles.mediaiconcontainer}>
                {/* Instagram Link */}
                <a
                    href="https://www.instagram.com/hochschule.reutlingen/" // URL, zu der das Icon verlinkt
                    target="_blank" // Öffnet den Link in einem neuen Tab
                    rel="noopener noreferrer" // Verhindert, dass die Zielseite Zugriff auf das aktuelle Fenster erhält (Sicherheitsmaßnahme)
                >
                    <img src="/instagram%20icon.svg" alt="Instagram" className={styles.mediaicon} />
                </a>

                {/* Threads Link */}
                <a
                    href="https://www.threads.net/@hochschule.reutlingen?xmt=AQGzc5I9gvbEx1MCXefUrMIeIvwrRQoqnJpzXq7IHyjIWDo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/threads%20icon.svg" alt="Threads" className={styles.mediaicon} />
                </a>

                {/* Twitch Link */}
                <a
                    href="https://m.twitch.tv/hsrt_campuslounge/home"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/twitch%20icon.svg" alt="Twitch" className={styles.mediaicon} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
