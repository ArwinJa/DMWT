import styles from '../styles/Home.module.css';
import Head from 'next/head';
import NavbarShowButton from "../components/navbarShowButton";
import LoginWidget from "../components/loginWidget";
import BackgroundNewsletter from "../components/backgroundNewsletter";
import ReturnButton from "../components/returnButton";


export default function Newsletter() {
    
      return (
          <div className={styles.container}>
              <Head>
                  {/* Google Fonts */}
                  <style>
                      @import
                      url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
                  </style>
                  <style>
                      @import
                      url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
                  </style>
                  <style>
                      @import
                      url('https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
                  </style>
              </Head>

              <main className={styles.mainNewsletter}>
                  <NavbarButtons/>
                  <LoginWidget/>
                  <BackgroundNewsletter/>
              </main>

              <style jsx global>{`
                  html,
                  body {
                      padding: 0;
                      margin: 0;
                  }

                  * {
                      box-sizing: border-box;
                  }
              `}</style>
          </div>
      );
}

function NavbarButtons() {

    return (
        <div className={styles.navbarButtonsContainer}>
            <ReturnButton/>
            <NavbarShowButton initiallyVisible={true} />
        </div>
    )
}