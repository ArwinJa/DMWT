import { useState } from 'react';
import styles from '../styles/scrollDownButton.module.css';

function ScrollDownButton() {
    const [src, setSrc] = useState('/Scroll DOWN Button.svg');

    const handleScrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,       // Scroll ganz nach oben
            behavior: 'smooth', // Sanftes Scrollen
        });
    };

    return (
        <img
            src={src}
            className={styles.scrollDownButton}
            onMouseOver={() => setSrc('/Scroll DOWN Button Variant.svg')}
            onMouseOut={() => setSrc('/Scroll DOWN Button.svg')}
            onClick={handleScrollToBottom}
            alt="Scroll Down Button"
        />
    );
}

export default ScrollDownButton;
