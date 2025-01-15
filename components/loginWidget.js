import styles from "../styles/loginWidget.module.css";
import {useState} from "react";

function LoginWidget() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous message
        setMessage('');

        try {
            const response = await fetch('/api/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name, Email }),
            });

            const data = await response.json();

            /* Wenn erfolgreich geaddet: */
            if (response.ok) {
                setMessage('Anmeldung erfolgreich ✓');
                setName('');
                setEmail('');
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Leider lief hier etwas schief.');
        }
    };

    return (
        <div className={styles.widgetContainer}>
            <h className={styles.heading1}>
                Bleib auf dem “Fliegenden”<br/>

            </h>
            <h className={styles.heading2}>
                Jetzt anmelden und per E-Mail über die neuesten<br/>
                Entwicklungen informiert werden.
            </h>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div>
                    <label className={styles.inputHeading}>Name:<br/></label>
                    <input className={styles.input}
                           id="name"
                           type="text"
                           value={Name}
                           onChange={(e) => setName(e.target.value)}
                           required
                    />
                </div>
                <div>
                    <label className={styles.inputHeading}>E-Mail-Adresse:<br/></label>
                    <input className={styles.input}
                           id="email"
                           type="email"
                           value={Email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                    />
                </div>
                <button type="submit" className={styles.bigButton}>Bestätigen</button>
            </form>
            {message && <p className={styles.successMessage}>{message}</p>}
        </div>
    )
}

export default LoginWidget;