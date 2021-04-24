import Head from "next/head";

import { FC } from "react";

import GridCards from "../comps/home/GridCards";
import InfoBar from "../comps/home/InfoBar";

import styles from "../styles/homePage/Home.module.css";

const Home: FC = () => {
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

        <InfoBar />

        <GridCards />
      </div>
    </>
  );
};

export default Home;
