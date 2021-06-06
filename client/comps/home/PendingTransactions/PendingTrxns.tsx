import { FC } from "react"
import styles from "../../../styles/homePage/PendingTrxns.module.css"
import Transaction from "../../shared/Transaction"
import PendingTrxsHeader from "../headers/PendingTrxsHeader"

interface PendingTrxnsProps {
  address: string;
}
const PendingTrxns: FC<PendingTrxnsProps> = ({ address }) => {
  
  return (
    <div className={styles.pendingTrxsContainer}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Pending Transactions</div> 
        </div>

        <PendingTrxsHeader/>
      </div>
      

      <div className={`${styles.sectionsWrapper}`}>
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={false} />
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={false}/>
        <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={false}/>
      </div>
          
    </div>
  )
}

export default PendingTrxns
