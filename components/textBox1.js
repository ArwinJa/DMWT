import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox1() {
    return (
        <div id="raketenstarts"
        style={{
            position: 'absolute',
            top: '85%',
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
                            <h2 className={styles.h2}>Raketenstarts</h2>
                            {/*<p className={styles.p}>
                                Es gibt eine Reihe von Anforderungen, die ein Weltraumbahnhof erfüllen muss, bevor er als 
                                solcher in Frage kommt. Als erstes sollte er sich in der Nähe des Äquators befinden, denn die durch
                                durch die Erdrotation verursachte Geschwindigkeitserhöhung ermöglicht ein leichteres Aufsteigen in
                                die Atmosphäre.
                            </p>*/}
                            <p className={styles.p}>
                                Der <span className={styles.pHighlighted}>massive Lärm</span> von über 180 Dezibel und die <span
                                className={styles.pHighlighted}>hohen Temperaturen</span> des Ausstoßes
                                der Triebwerke, die bei Raketenstarts auftreten,
                                können langfristige Folgen für die umliegende Vegetation und Tierwelt bedeuten.
                                Die <span className={styles.pHighlighted}>Abgase und Treibstoffreste</span> können
                                die Luft- und Wasserqualität im betroffenen
                                Umkreis verschlechtern oder sogar kontaminieren.
                                <br/>Zudem besteht natürlich eine Gefahr von <span
                                className={styles.pHighlighted}>herunterfallenden
                                Trümmern und Boosterraketenteilen.</span>
                                <br/><br/>
                                Oft werden deswegen für Raketenstarts unbesiedelte Gebiete mit wenig Vegetation, wie
                                etwa Küstengegenden, verwendet, da Trümmer und Reste so ins Meer
                                fallen können und so wenig Vegetation wie möglich beschädigt wird — ein Schritt in die
                                richtige Richtung.
                                <br/><br/>
                                Ganz davon abgesehen verbrauchen Raketen je nach Art der Mission <span className={styles.pHighlighted}>Hunderte
                                bis Tausende Tonnen an Treibstoffen</span> pro Start.
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox1;
