import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import WalletInfo from "../../comps/wallet/WalletInfo";
import styles from "../../styles/walletStyles/WalletPage.module.css";

import Head from "next/head";

import headerStyles from "../../styles/homePage/Home.module.css";
const walletPage: FC = () => {
  let { address } = useRouter().query;
  address = address as string;

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Wallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={headerStyles.container}>
        <h1 className={headerStyles.title}>Wallet</h1>
      </div>

      <WalletInfo address={address} />
    </div>
  );
};

export default walletPage;
