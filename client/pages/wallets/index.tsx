import Head from 'next/head';
import { FC } from 'react';

import headerStyles from '../../styles/homePage/Home.module.css'

const index: FC = () => {
  return (
    <>
       <Head>
        <title>Wallets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={headerStyles.container}>
        <h1 className={headerStyles.title}>
          Your<span>Wallet</span>
        </h1>
      </div>

      
    </>
  )
}

export default index;
