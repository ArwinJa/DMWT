import styles from '../styles/navbarShowButton.module.css';
import { useState } from "react";
import Navbar from "../components/Navbar";

function NavbarShowButton() {
    const [src, setSrc] = useState('/Show Navbar Button.svg');
    const [isNavbarVisible, setNavbarVisible] = useState(false);


    const handleClick = () => {
        setNavbarVisible(!isNavbarVisible); // Sichtbarkeit toggeln
        setSrc(isNavbarVisible ? '/Show Navbar Button.svg' : '/Show Navbar Button Variant.svg');
    };

    return (
        <>
            <img
                src={src}
                className={`${styles.button} ${isNavbarVisible ? styles.buttonActive : ''}`} /* Wechsle Style wenn Navbar aktiv */
                onMouseOver={() => setSrc('/Show Navbar Button Variant.svg')}
                onClick={handleClick}
                alt="Show/Hide Navbar Button"
            />
            {/* Zeigt Navbar nur, wenn sichtbar */}
            <div className={`${styles.navbarAnimation} ${isNavbarVisible ? styles.navbarVisibleAnimation : ''}`}>
                <Navbar/>
            </div>
        </>
    );
}

export default NavbarShowButton;


/*
import styles from '../styles/navbarShowButton.module.css'
import {useState} from "react";
import Navbar from "../components/Navbar";

function NavbarShowButton() {
    const [src, setSrc] = useState('/Show Navbar Button.svg');

    const handleClick = () => {
    };

    return (
        <img
            src={src}
            className={styles.button}
            onMouseOver={() => setSrc('/Show Navbar Button Variant.svg')}
            onMouseOut={() => setSrc('/Show Navbar Button.svg')}
            onClick={handleClick}
            alt="Show Navbar Button"
        />
    );
}

export default NavbarShowButton;
*/