import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox2() {
    return (
        <div id="treibstoffe"
        style={{
            position: 'absolute',
            top: '70%',
            left: '40.5%',
            height: '83vh'
        }}>
            <InView
                threshold={0.5} // Element wird sichtbar, wenn 50% im Viewport sind
            >
                {({inView, ref}) => (
                    <div
                        ref={ref}
                        className={`${styles.fadeIn} ${inView ? styles.visible : styles.hidden}`}
                    >
                        <div className={styles.textBoxMain}>
                            <h2 className={styles.h2}>Treibstoffe</h2>
                            <p className={styles.p}>
                                Ein Raketenstart verursacht Tonnen von CO2 pro Astronauten.
                                Diese Zahlen sind pro Person mehr als das zehnfache eines Flugzeugpassagiers.
                                Durch die im Vergleich geringe Anzahl von Raketenstarts ist dies ein geringeres Problem,
                                viel schlimmer isst die Höhe, in der die Schadstoffe sich befinden.
                            </p>
                            <p className={styles.p}>
                            In der Stratosphäre (15 bis 50km) und Mesosphäre (50 bis 80km) können die Treibhausgase
                            für mehrere Jahre bestehen bleiben, was zu einem negativen Effekt auf das Weltklima beiträgt.
                            </p>
                            <p className={styles.p}>
                            Neben CO2 entstehen auch Stoffe wie Aluminiumoxid, Stickoxid und Wasserdampf.
                            Diese Stoffe reagieren in der Stratosphäre und tragen zum Ozonabbau bei. 
                            Die Ozonschicht ist ein wichtiger Bestandteil, der die Erde vor Ultravioletter Strahlung schützt.
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox2;
