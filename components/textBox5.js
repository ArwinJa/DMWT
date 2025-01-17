import { InView } from 'react-intersection-observer';
import styles from '../styles/textBoxClear.module.css';

function TextBox5() {
    return (
        <div id="loesungsansaetze"
        style={{
            position: 'absolute',
            top: '20%',
            left: '25%'
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
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                            <p className={styles.p}>
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                            <p className={styles.p}>
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    );
}

export default TextBox5;
