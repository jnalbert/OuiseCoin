import { FC } from 'react';
import styles from "../../styles/walletStyles/WalletTranasactions.module.css";
import Transaction from "../shared/Transaction";

interface WalletTransactionsProps {
  address: string;
}

const WalletTransactions: FC<WalletTransactionsProps> = ({ address }) => {
  
  return (
    <div className={styles.wrapper}>

      <div className={styles.headerWrapper}>
        <span className={styles.header}>Transactions</span>
      </div>

      <div className={styles.transactionsContainer}>
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={true} />
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={true} />
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={true} border={true} />
      </div>

    </div>
  )
}

export default WalletTransactions
