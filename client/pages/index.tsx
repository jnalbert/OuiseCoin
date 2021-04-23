import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Ouise<span>Coin</span>
      </h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Blocks</h3>
          <div className={styles.content}>
            Content
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Transactions</h3>
          <div className={styles.content}>
            Content
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>You</h3>
          <div className={styles.content}>
          Content
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Miners &rarr;</h3>
          <div className={styles.content}>
          Content
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <a>All rights reserved: Justin Albert</a>
      </footer>
    </div>
  );
}

export default Home;
