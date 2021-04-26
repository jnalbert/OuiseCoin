import { FC } from "react"
import styles from "../../styles/homePage/UserWalletContent.module.css"

interface UserWalletContentProps {
  address: string;
}

const UserWalletContent: FC<UserWalletContentProps> = ({address}) => {
  const balanceOUC = 6.77;
  const balanceUSD = 56.03
  const transactions = 5;
  const blocksMined = 3;
  const FillIn = "Fill In"
  const dataCreated = "4/5/2021"

  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.addressContainer}>
          <span className={styles.contentName}>Address: </span> {address}
      </div>

      <div className={styles.walletContent}>

        <div className={styles.contentWrapper}>
          
            <div className={styles.contentNames}>
              <div className={styles.contentName}>Balance (OUC)</div>
              <div className={styles.contentName}>Balance (USD)</div>
              <div className={styles.contentName}>Transactions</div>
            </div>

            <div className={styles.contentData}>
              <div className={styles.contentData}>{balanceOUC} OUC</div>
              <div className={styles.contentData}> ${balanceUSD} </div>
              <div className={styles.contentData}> {transactions} </div>
            </div>
          
        </div>

        <div className={styles.lineDiv}></div>

        <div className={`${styles.contentWrapper} ${styles.rightContentWrapper}`}>
          <div className={styles.contentNames}>
                <div className={styles.contentName}>Blocks Mined</div>
                <div className={styles.contentName}>Fill In</div>
                <div className={styles.contentName}>Created At</div>
              </div>

              <div className={styles.contentData}>
            <div className={styles.contentData}>{ blocksMined}</div>
                <div className={styles.contentData}> {FillIn} </div>
                <div className={styles.contentData}> {dataCreated} </div>
              </div>
        </div>
    </div>
    </div>
    
  )
}

export default UserWalletContent
