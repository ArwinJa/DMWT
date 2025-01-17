import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox2() {
    return (
        <div id="abgase"
        style={{
            position: 'absolute',
            top: '70%',
            left: '40.5%',
            height: '90vh',
            zIndex: '10'
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
                            <h2 className={styles.h2}>Abgase</h2>
                            <p className={styles.p}>
                                Ein Raketenstart verursacht <p className={styles.pHighlighted}>hunderte von Tonnen an CO2-Ausstößen</p> —
                                durch die im Vergleich geringe Anzahl von Raketenstarts ist dies aber weltweit nur ein geringer Anteil.
                                Viel schlimmer ist aber die <p className={styles.pHighlighted}>Höhe, in der sich die Schadstoffe befinden.</p>
                                <br/><br/>
                                In der Stratosphäre (15 bis 50km) und Mesosphäre (50 bis 80km)
                                können die Treibhausgase <p className={styles.pHighlighted}>für mehrere Jahre</p> bestehen
                                bleiben, was zu einem negativen Effekt auf das Weltklima
                                beiträgt.
                                <br/><br/>
                                Neben CO2 entstehen auch Stoffe wie Aluminiumoxid, Stickoxid und Wasserdampf.
                                Diese Stoffe reagieren in der Stratosphäre und <p className={styles.pHighlighted}>tragen
                                zum Ozonabbau bei.</p>
                                Die Ozonschicht ist ein wichtiger Bestandteil, der die Erde vor Ultravioletter Strahlung
                                schützt.
                                <br/><br/>
                                Die gesamten Auswirkungen der Partikel- und Gasemissionen von Raketenstarts
                                auf die Ozonschicht und den Treibhauseffekt sind jedoch leider <p
                                className={styles.pHighlighted}>noch
                                immer wenig erforscht.</p>
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox2;
