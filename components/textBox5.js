import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox5() {
    return (
        <div id="loesungsansaetze"
        style={{
            position: 'absolute',
            top: '18%',
            left: '27%',
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
                            <h2 className={styles.h2}>Lösungsansätze</h2>
                            <p className={styles.p}>
                                Es gibt bereits einige Lösungsansätze der genannten Probleme,
                                aber auch <span className={styles.pHighlighted}>viele Hürden.</span> Eine offensichtliche,
                                aber unrealistische Lösung wäre eine <span className={styles.pHighlighted}>stärkere
                                internationale Zusammenarbeit</span> in Weltraummissionen und Forschung — damit könnte man die Schäden durch
                                Weltraumbahnhöfe minimieren und hätte eine bessere Resourcenallokation.
                                <br/><br/>
                                Bei den Treibstoffen wird stets geforscht,
                                um bessere und <span className={styles.pHighlighted}>nachhaltigere Alternativen</span> zu finden,
                                wie etwa Bio-Treibstoffe aus organischen Abfällen anstelle von fossilen Treibstoffen.
                                <br/>In den letzten Jahren findet jedoch ein gefährlicher Trend statt:
                                Der sogenannte <span className={styles.pHighlighted}>Weltraumtourismus.</span> Sobald sich
                                dieser weiter verbreitet besteht die Gefahr, dass es zu erheblichen Umweltschäden kommt.
                                <br/><br/>
                                Am Weltraummüll wird auch bereits gearbeitet;
                                neben <span className={styles.pHighlighted}>Strafen für Verursacher</span> gibt es auch
                                Organisationen,
                                die an wiederverwendbaren Raketen arbeiten. Noch sind viele dieser
                                Lösungen am Anfang, dennoch zeigt sich, dass es ein Bewusstsein für
                                nachhaltige Raumfahrt entwickelt.
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox5;
