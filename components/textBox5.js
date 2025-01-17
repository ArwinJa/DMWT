import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox5() {
    return (
        <div id="loesungsansaetze"
        style={{
            position: 'absolute',
            top: '18%',
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
                            <h2 className={styles.h2}>Lösungsansätze</h2>
                            <p className={styles.p}>
                                Es gibt bereits einige Lösungsansätze der genannten Probleme aber auch viele Hürden.
                                Eine offensichtliche, aber unrealistische Lösung wäre eine stärkere internationale
                                Zusammenarbeit und Forschung der Länder, damit könnte man die Schäden durch Weltraumbahnhöfen 
                                minimieren und hätte eine bessere Resourcenallokation.
                            </p>
                            <p className={styles.p}>
                                Bei den Treibstoffen wird stets geforscht,
                                um bessere und nachhaltigere Alternativen zu finden.
                                In den letzten Jahren findet jedoch ein gefährlicher Trend statt,
                                nämlich der sogenannte Weltraumtourismus. Sobald dieser sich weiterverbreitet
                                besteht die Gefahr, dass es zu erheblichen Umweltschäden kommt.
                            </p>
                            <p className={styles.p}>
                                Am Weltraummüll wird auch bereits gearbeitet,
                                neben Strafen für Verursacher gibt es auch Organisationen,
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
