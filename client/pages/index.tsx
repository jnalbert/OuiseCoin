import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Ouise Coin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>
          Ouise<span>Coin</span>
        </h1>

        <div className={styles.infoContainer}>
          
        </div>

        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Blocks</h3>
            <div className={styles.content}>Content</div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Transactions</h3>
            <div className={styles.content}>Content</div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>You</h3>
            <div className={styles.content}>Content</div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Miners &rarr;</h3>
            <div className={styles.content}>Content</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
