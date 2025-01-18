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
                                Ein Raketenstart verursacht <span className={styles.pHighlighted}>hunderte von Tonnen an CO2-Ausstößen</span> —
                                durch die im Vergleich geringe Anzahl von Raketenstarts ist dies aber weltweit nur ein geringer Anteil.
                                Viel schlimmer ist aber die <span className={styles.pHighlighted}>Höhe, in der sich die Schadstoffe befinden.</span>
                                <br/><br/>
                                In der Stratosphäre (15 bis 50km) und Mesosphäre (50 bis 80km)
                                können die Treibhausgase <span className={styles.pHighlighted}>für mehrere Jahre</span> bestehen
                                bleiben, was zu einem negativen Effekt auf das Weltklima
                                beiträgt.
                                <br/><br/>
                                Neben CO2 entstehen auch Stoffe wie Aluminiumoxid, Stickoxid und Wasserdampf.
                                Diese Stoffe reagieren in der Stratosphäre und <span className={styles.pHighlighted}>tragen
                                zum Ozonabbau bei.</span>
                                Die Ozonschicht ist ein wichtiger Bestandteil, der die Erde vor Ultravioletter Strahlung
                                schützt.
                                <br/><br/>
                                Die gesamten Auswirkungen der Partikel- und Gasemissionen von Raketenstarts
                                auf die Ozonschicht und den Treibhauseffekt sind jedoch leider <span
                                className={styles.pHighlighted}>noch
                                immer wenig erforscht.</span>
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox2;
