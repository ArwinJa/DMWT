import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox1() {
    return (
        <div id="raketenstarts"
        style={{
            position: 'absolute',
            top: '85%',
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
                            <h2 className={styles.h2}>Raketenstarts</h2>
                            <p className={styles.p}>
                                Es gibt eine Reihe von Anforderungen, die ein Weltraumbahnhof erfüllen muss, bevor er als 
                                solcher in Frage kommt. Als erstes sollte er sich in der Nähe des Äquators befinden, denn die 
                                höhere Geschwindigkeit verursacht durch die Erdrotation ermöglicht ein leichteres Aufsteigen in 
                                der Atmosphäre. 
                            </p>
                            <p className={styles.p}>
                                Außerdem sollte ein Weltraumbahnhof abseits von dicht besiedelten Gebieten liegen, da die Gefahr von 
                                herunterfallenden Trümmern besteht und in etwas weiterer Entfernung auch abgestoßene Boosterraketen. 
                            </p>
                            <p className={styles.p}>
                                Ein weiteres Risiko sind potenziell giftige Treibstoffreste. 
                                Durch das Ausweichen auf dünn besiedelte Gebiete werden diese Aspekte eine Gefahr für
                                unberührte Regionen.

                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox1;
