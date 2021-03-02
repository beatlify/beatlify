import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beatlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to <b>Netlify</b></h1>
        <h4 className={styles.desc}><i>Under Heavy Development</i></h4>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/beatlify/beatlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      
    </div>
  );
};

export default Home;
