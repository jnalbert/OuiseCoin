import Head from 'next/head';
import { FC } from 'react';
import styles from '../../../styles/homePage/Home.module.css'

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blocks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Blocks
      </h1>
    </div>
      

  )
}

export default Home;
