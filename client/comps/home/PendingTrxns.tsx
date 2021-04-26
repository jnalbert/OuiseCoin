import { FC } from "react"
import styles from "../../styles/homePage/PendingTrxns.module.css"
import Transaction from "../shared/Transaction"

interface PendingTrxnsProps {
  address: string;
}
const PendingTrxns: FC<PendingTrxnsProps> = ({address}) => {
  return (
    <div className={styles.pendingTrxsContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Pending Transactions</div> 
        </div>

        <div className={`${styles.contentHeader} ${styles.txnHeader}`}>
            <div style={{width: "30%"}}>Hash</div>
            <div style={{width: "22%"}}>Time</div>
            <div style={{width: "20%"}}>Amount (ouc)</div>
            <div style={{width: "19%"}}>Amount (USD)</div>
            <div style={{width: "9%"}}>Confirmed</div>
        </div>
      </div>
      

      <div className={`${styles.sectionsWrapper}`}>
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} />
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} />
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false}/>
      </div>
          
    </div>
  )
}

export default PendingTrxns
