import { FC } from "react"
import styles from "../../styles/Shared.module.css";
import trxStyles from "../../styles/BlockChainComps/Transaction.module.css"
import Link from "next/link";

interface TransactionProps {
  hash: string;
  time: string;
  amountOUC: number;
  amountUSD: number;
  confirmed: boolean;
}

const Transaction: FC<TransactionProps> = ({ hash, time, amountOUC, amountUSD, confirmed }) => {
  const getIsConfirmedHTML = () => {
    if (confirmed) {
      return <span className={trxStyles.emojiSpan}>✅</span>
    }
    return <span className={trxStyles.emojiSpan}>❌</span>
  }
  const isConfirmed = (confirmed) ? "Yes " : "No ";
  return (
    <div className={styles.section}>

      <div style={{width: "30%"}}>
        <div className={`${styles.spanWrapper} ${styles.hiddenText}`}>
          <Link href={`/blockchain/transactions/${hash}`}>
            <a>
              <span className={`${styles.blockSpan} ${styles.hoverLink}`}>{ hash }</span>
            </a>
          </Link>
          
        </div>
      </div>

      <div style={{width: "22%"}}>
        <div className={styles.spanWrapper}>
          <span className={styles.blockSpan}>{ time }</span>
        </div>
      </div>

      <div style={{width: "20%"}}>
        <div className={styles.spanWrapper}>
          <span className={styles.blockSpan}>{ amountOUC } OUC</span>
        </div>
      </div>

      <div style={{width: "19%"}}>
        <div className={styles.spanWrapper}>
          <span className={styles.blockSpan}>${ amountUSD }</span>
        </div>
      </div>

      <div style={{width: "9%"}}>
        <div className={styles.spanWrapper}>
          <span className={styles.blockSpan}>{ isConfirmed } { getIsConfirmedHTML() }</span>
        </div>
      </div>

    </div>
  )
}

export default Transaction
