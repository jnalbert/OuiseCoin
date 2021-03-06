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
  const received = 55.3;
  const dataCreated = "4/5/2021"
  const userName = "Justin Albert"

  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.nameContainer}>
          {userName}
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
                <div className={styles.contentName}>Received</div>
                <div className={styles.contentName}>Created At</div>
              </div>

              <div className={styles.contentData}>
            <div className={styles.contentData}>{ blocksMined}</div>
                <div className={styles.contentData}> {received} OUC</div>
                <div className={styles.contentData}> {dataCreated} </div>
              </div>
        </div>
    </div>
    </div>
    
  )
}

export default UserWalletContent
