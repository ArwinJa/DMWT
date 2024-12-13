import { useState } from 'react';
import styles from '../styles/scrollUpButton.module.css';

function ScrollUpButton() {
    const [src, setSrc] = useState('/Scroll UP Button.svg');

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,       // Scroll ganz nach oben
            behavior: 'smooth', // Sanftes Scrollen
        });
    };

    return (
        <img
            src={src}
            className={styles.scrollUpButton}
            onMouseOver={() => setSrc('/Scroll UP Button Variant.svg')}
            onMouseOut={() => setSrc('/Scroll UP Button.svg')}
            onClick={handleScrollToTop}
            alt="Scroll Up Button"
        />
    );
}

export default ScrollUpButton;
