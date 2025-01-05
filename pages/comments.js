import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useState } from 'react';


export default function Comments() {

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
            body: JSON.stringify({ name, email }),
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
        <div style={{ padding: '20px' }}>
          <h1>Add User</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
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
            
    
      );
    }