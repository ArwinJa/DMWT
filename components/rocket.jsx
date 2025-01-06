import { useEffect } from 'react';
import styles from '../styles/rocket.module.css';
import { Rive } from '@rive-app/canvas';
import Lenis from 'lenis';

// TODO: Logik einbauen, dass bei den Schnell-Hoch und -Runter Buttons die Animation auch deaktiviert wird solange es scrolled
function Rocket() {
    useEffect(() => {
        // Initialisiere ScrollAnimationController nach dem Rendern
        class ScrollAnimationController {
            constructor(canvasId, rivePath) {
                this.canvas = document.getElementById(canvasId);
                this.animations = {
                    scroll_section7: { min: 0.1, max: 0.3 }, // Nach wieviel gescrolltem Prozent der Seite soll es einsetzen?
                    scroll_section6: { min: 0.3, max: 0.4 },
                    scroll_section5: { min: 0.4, max: 0.8 },
                    scroll_section4: { min: 0.8, max: 0.9 },
                    //scroll_section3: { min: 0.90, max: 1 },
                    //scroll_section2: { min: 0.99, max: 1 },
                    scroll_section1: { min: 0.9, max: 1 } // Hier beginnt es
                };
                this.currentAnimation = null;
                this.scrollEnabled = false; // Animation deaktiviert anfangs

                // Initialize Rive
                this.rive = new Rive({
                    canvas: this.canvas,
                    src: rivePath,
                    autoplay: true,
                    stateMachines: "ScrollController",
                    onLoad: () => this.init(),
                });
            }

            init() {
                // Get state machine inputs
                this.stateMachine = this.rive.stateMachineInputs("ScrollController");

                // Füge Scroll-Listener hinzu, aber verhindere Aktivierung
                window.addEventListener('scroll', () => {
                    if (this.scrollEnabled) this.handleScroll();
                })

                // Initiales Scroll-Handling deaktiviert, damit es beim Öffnen nicht die ganze Animation spielt
                // wegen Herunterscrollen.
                setTimeout(() => {
                    this.scrollEnabled = true; // Nach einer bestimmten Zeit aktivieren
                }, 3000); // 3000 ms = 3 sek
            }

            handleScroll() {
                const scrollPercent =
                    window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

                // Determine active animation
                for (const [animName, range] of Object.entries(this.animations)) {
                    if (scrollPercent >= range.min && scrollPercent <= range.max) {
                        if (this.currentAnimation !== animName) {
                            this.currentAnimation = animName;
                            this.playAnimation(animName);
                        }
                        break;
                    }
                }
            }

            playAnimation(animationName) {
                this.stateMachine.forEach(input => {
                    if (input.name === animationName) {
                        input.fire();
                    }
                });
            }
        }

        // Initialize the controller
        const controller = new ScrollAnimationController('riveCanvas', '/rakete_animation.riv');

        // Initialize Lenis
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', controller.handleScroll);
        };
    }, []);

    return (
        <div className={styles.rocket}>
            <canvas id="riveCanvas" width="3700" height="2700"></canvas>
        </div>
    );
}

export default Rocket;
