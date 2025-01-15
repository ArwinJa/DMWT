import { useState } from 'react';
import styles from '../styles/returnButton.module.css';
import Link from "next/link";

function ScrollDownButton() {
    const [src, setSrc] = useState('/Return Button.svg');

    const handleClick = () => {
        <Link href="/" className={styles.returnButton}></Link>
    };

    return (
        <Link href="/">
            <img
                src={src}
                className={styles.returnButton}
                onMouseOver={() => setSrc('/Return Button Variant.svg')}
                onMouseOut={() => setSrc('/Return Button.svg')}
                onClick={handleClick}
                alt="Return to main page Button"
            />
        </Link>
    );
}

export default ScrollDownButton;
