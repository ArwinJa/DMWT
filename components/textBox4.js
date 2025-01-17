import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox4() {
    return (
        <div id="weltraummuell" 
        style={{
            position: 'absolute',
            top: '40%',
            left: '27%',
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
                            <h2 className={styles.h2}>Weltraummüll</h2>
                            <p className={styles.p}>
                                Unsere Orbits sind aber nicht nur von Satelliten bevölkert,
                                sondern auch von Weltraummüll oder Weltraumschrott. Dabei handelt es sich und Gegenstände,
                                die keinen Gebrauchswert mehr besitzen, sondern eine Gefahr für die bemannte und unbemannte Raumfahrt.
                                Diese Gefahren sind zum einem das unkontrollierte Herabstürzen aus dem All aber auch eine Kollision mit Satelliten.
                            </p>
                            <p className={styles.p}>
                                Dieser Schrott fliegt mit hohen Geschwindigkeiten im Orbit umher
                                und kann somit schon mit einer geringen Masse eine Gefahr für Satelliten
                                und Stationen darstellen. Sollte es zu einer Kollision kommen wird immer mehr Schrott verursacht.
                                Man kann also einen Teufelskreis beobachten. 
                            </p>
                            <p className={styles.p}>
                                Im Rahmen von mehreren Kampagnen zur Messung hat man festgestellt,
                                dass die Anzahl der fliegenden Objekte weiter ansteigt.
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox4;
