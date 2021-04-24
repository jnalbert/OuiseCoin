import { FC } from "react";
import styles from "../../styles/homePage/GridCards.module.css";
import Link from "next/link";

const GridCards: FC = () => {
  return (
    <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/blocks">
              <a>
                <h3 className={styles.cardTitle}>Blocks</h3>
              </a>
            </Link>
            <div className={styles.content}>Content</div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Transactions</h3>
            <div className={styles.content}>Content</div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>You</h3>
            <div className={styles.content}>Content</div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Miners &rarr;</h3>
            <div className={styles.content}>Content</div>
          </div>
        </div>
  )
}

export default GridCards;
