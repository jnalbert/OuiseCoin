import Head from 'next/head';
import styles from '../../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Block<span>Chain</span>
      </h1>
    </div>
      

  )
}

export default Home;
