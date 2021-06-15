import { FC } from 'react';
import Head from 'next/head'
import headerStyles from "../../styles/homePage/Home.module.css"
const success: FC = () => {
  return (
    <div>
      <Head>
        <title>Send OUC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={headerStyles.container}>
        <h1 style={{ paddingTop: "70px", color: "#13b913"}} className={headerStyles.title}>Successfully Sent Transaction!</h1>
      </div>

    </div>
  )
}

export default success