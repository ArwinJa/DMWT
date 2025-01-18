import styles from '../styles/textBoxAnmeldeaufruf.module.css';
import Link from 'next/link';


function TextBoxAnmeldeaufruf() {
    return (
        <div id="anmeldeaufruf"
            style={{
                position: 'absolute',
                top: '5%',
                left: '27%',
                height: '90vh',
                zIndex: '10'
            }}>

            <div className={styles.textBoxMain}>
                <h2 className={styles.h2}>Bleib auf dem “Fliegenden”</h2>
                <p className={styles.p}>
                    Melde dich jetzt für den Newsletter an und werde
                    immer über die neuesten Entwicklungen informiert
                </p>
                <div className={styles.link}>
                    <Link href="/newsletter" className={styles.button}>Jetzt anmelden</Link>
                </div>
            </div>
        </div>
    );
}

export default TextBoxAnmeldeaufruf;
