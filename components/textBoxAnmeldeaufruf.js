import styles from '../styles/textBoxAnmeldeaufruf.module.css';
import Link from 'next/link';


function TextBoxAnmeldeaufruf() {
    return (
        <div id="anmeldeaufruf" className={styles.textBoxContainer}>

            <div className={styles.textBoxMain}>
                <h2 className={styles.h2}>Bleib auf dem “Fliegenden”</h2>
                <p className={styles.p}>
                    Melde dich jetzt für den Newsletter an und werde
                    immer<br/>über die neuesten Entwicklungen informiert.
                </p>
                <div className={styles.link}>
                    <Link href="/newsletter" className={styles.button}>Jetzt anmelden</Link>
                </div>
            </div>
        </div>
    );
}

export default TextBoxAnmeldeaufruf;
