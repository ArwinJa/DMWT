import { useEffect } from 'react';
import styles from '../styles/rocket.module.css';
import { Rive } from '@rive-app/canvas';
import Lenis from 'lenis';
import { useAnimation } from "../contexts/animationContext";

function Rocket() {
    const { scrollEnabled } = useAnimation(); // Greife auf den scrollEnabled Zustand zu

    useEffect(() => {
        // Initialisiere ScrollAnimationController nach dem Rendern
        class ScrollAnimationController {
            constructor(canvasId, rivePath) {
                this.canvas = document.getElementById(canvasId);
                this.animations = {
                    scroll_section7: {}, // Nach wieviel gescrolltem Prozent der Seite soll es einsetzen?
                    scroll_section6: { min: 0.0, max: 0.4 },
                    scroll_section5: { min: 0.4, max: 0.97 },
                    scroll_section4: { min: 0.97, max: 0.98 },
                    scroll_section3: {},
                    scroll_section2: {},
                    scroll_section1: { min: 0.99, max: 1 } // Hier beginnt es
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
                    this.scrollEnabled = true; // Nach 3 Sekunden aktivieren
                    this.handleScroll(); // Initialer Scroll-Check
                }, 3000);
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

            triggerAnimationManually(animationName) {
                this.playAnimation(animationName); // Spielt nur `scroll_section2` ab, ohne min/max.
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
            <canvas id="riveCanvas" width="1920" height="1080"></canvas>
        </div>
    );
}

export default Rocket;
