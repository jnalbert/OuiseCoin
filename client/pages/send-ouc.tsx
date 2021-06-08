import Head from 'next/head';
import { FC } from 'react';
import SendOucForm from '../comps/sendOuc/SendOucForm';
import headerStyles from "../styles/homePage/Home.module.css";

const SendOucPage: FC = () => {
  const address = "38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ"
  return (
    <>
      <Head>
        <title>Send OUC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={headerStyles.container}>
        <h1 className={headerStyles.title}>Send <span>OUC</span></h1>
      </div>

      <SendOucForm address={ address}/>
    </>
  )
}

export default SendOucPage

