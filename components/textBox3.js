import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox3() {
    return (
        <div id="im_orbit"
        style={{
            position: 'absolute',
            top: '55%',
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
                            <h2 className={styles.h2}>Im Orbit</h2>
                            <p className={styles.p}>
                                Der Weltraum mag zwar für uns aus unendlichen Weiten bestehen,
                                unser Erdorbit ist aber begrenzt. Je nach Art der Satelliten oder Raumstation
                                wird eine bestimmte Höhe benötigt. Diese Schichten sind unterteilt
                                in <span className={styles.pHighlighted}>niedrigen Erdorbit, mittleren Erdorbit und geostationären Orbit.</span>
                                <br/><br/>
                                Der niedrige Erdorbit ist der am einfachsten zu erreichender Orbit.
                                Seine primäre Nutzung ist zum einem die bemannte Raumfahrt mit der ISS,
                                aber auch astronomische Satelliten wie das Hubble-Teleskop,
                                welches wichtig für unsere Erforschung des Weltalls ist, aber auch Satelliten welche
                                eine entscheidende Rolle in unserer Kommunikation spielen.
                                Der Mittlere Erdorbit ist wichtig für unsere Kommunikation mit weiteren Satelliten,
                                aber auch für die weltweite Navigation wie GPS oder Galileo.
                                <br/><br/>
                                Zum Schluss gibt es noch den geostationären Orbit, welcher neben Meteorologischen-
                                und Kommunikationssatelliten auch eine wichtige Rolle in der TV-Übertragung mit
                                Satelliten wie Astra spielt.
                                <br/><br/>
                                Alle diese Orbits sind begrenzt in ihrer Kapazität für Satelliten und
                                <span className={styles.pHighlighted}>wir neigen uns jetzt schon einer Überbevölkerung zu</span>,
                                in Folge welcher Satelliten immer öfter Ausweichmanöver vollführen
                                müssen.
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox3;
