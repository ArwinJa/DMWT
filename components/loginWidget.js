import styles from "../styles/loginWidget.module.css";
import Link from "next/link";
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

            if (response.ok) {
                setMessage('User added successfully!');
                setName('');
                setEmail('');
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to add user');
        }
    };

    return (
        <div className={styles.widgetContainer}>
            <h className={styles.heading1}>Jetzt anmelden!</h>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div>
                    <label htmlFor="name" className={styles.text1}>Name:<br/></label>
                    <input className={styles.input}
                        id="name"
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className={styles.text1}>Email:<br/></label>
                    <input className={styles.input}
                        id="email"
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
            <button className={styles.button1}>
                <Link href="/">MainPage</Link>
            </button>
        </div>
    )
}

export default LoginWidget;