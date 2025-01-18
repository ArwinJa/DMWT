import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox4() {
    return (
        <div id="weltraummuell" 
        style={{
            position: 'absolute',
            top: '40%',
            left: '27%',
            height: '85vh',
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
                            <h2 className={styles.h2}>Weltraummüll</h2>
                            <p className={styles.p}>
                                Unsere Orbits sind aber nicht nur von Satelliten bevölkert,
                                sondern auch von <span className={styles.pHighlighted}>Weltraummüll bzw. -schrott</span>. Dabei
                                handelt es sich um Gegenstände,
                                die keinen Gebrauchswert mehr besitzen, z. B. Trümmerreste.
                                <br/>Sie bergen Gefahren für die bemannte und unbemannte Raumfahrt:
                                Zum einen das <span className={styles.pHighlighted}>unkontrollierte Herabstürzen</span> aus dem
                                All, aber auch <span className={styles.pHighlighted}>mögliche Kollisionen</span> mit Satelliten.
                                <br/><br/>
                                Dieser Schrott fliegt mit hohen Geschwindigkeiten im Orbit umher
                                und kann somit schon mit einer geringen Masse eine Gefahr für Satelliten
                                und Stationen darstellen. Sollte es zu einer Kollision kommen wird immer mehr Schrott
                                verursacht.
                                Man kann also einen Teufelskreis beobachten.
                                <br/><br/>
                                Im Rahmen mehrerer Kampagnen zur Messung hat man festgestellt,
                                dass die <span className={styles.pHighlighted}>Anzahl der fliegenden Objekte weiter ansteigt.</span>
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox4;
