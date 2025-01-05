import useSWR from 'swr';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/navigation';
import Link from "next/link";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Comments() {
    const router = useRouter();

    const {
        data: comments,
        isLoading,
        isError: error,
    } = useSWR(
        "https://jsonplaceholder.typicode.com/comments?_limit=10",
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
    );

    if (error) {
        return <p>Failed to fetch</p>;
    }

    if (isLoading) {
        return <p>Loading comments...</p>;
    }

    return (
        <div className={styles.containerVertical}
             style={{
                 backgroundColor: 'darkgrey'
             }}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p className={styles.title2}>Kommentare</p>
            <ul className={styles.commentStyle}>
                {comments.map((comment, index) => (
                    <li key={index}>
                        {comment.name}
                    </li>
                ))}
            </ul>

            <button className={styles.button1}>
                <Link href="/">Zurück zur Homepage</Link>
            </button>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
                </a>
            </footer>
            <style jsx>{`

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}
            </style>
        </div>
    );
}