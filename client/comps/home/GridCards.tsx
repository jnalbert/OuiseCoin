import { FC } from "react";
import styles from "../../styles/homePage/GridCards.module.css";

import Card from "./Card";

const GridCards: FC = () => {
  return (
    <div className={styles.grid}>
      <Card title="Blocks" href="/blocks">
        <div className={styles.contentHeader}>
          <div className={styles.contentTypeIndex}>Index</div>
          <div className={styles.contentTypeMined}>Mined</div>
          <div className={styles.contentTypeMiner}>Miner</div>
          <div className={styles.contentTypeHash}>Hash</div>
        </div>

        <div className={styles.blocksWrapper}>

          <div className={styles.block}>

            <div className={styles.contentTypeIndex}>
              <div className={styles.spanWrapper}>
                <span className={styles.blockSpan}>5</span>
              </div>
            </div>

            <div className={styles.contentTypeMined}>
              <div className={styles.spanWrapper}>
                <span className={styles.blockSpan}>25 seconds</span>
              </div>
            </div>

            <div className={`${styles.contentTypeMiner} ${styles.hiddenText}`}>
              <div className={`${styles.spanWrapper} ${styles.hiddenText}`}>
                <span className={styles.blockSpan}>
                  234kl234kl234kl23kl423kl42l4b23l4bl2j3b4jl23b4jl2b4lj23b4jl23b
                </span>
              </div>
            </div>

            <div className={`${styles.contentTypeHash} ${styles.hiddenText}`}>
              <div className={`${styles.spanWrapper} ${styles.hiddenText}`}>
                <span className={styles.blockSpan}>
                  2349023423o4n23kl4n2j3n4kl2n423l4k23n4kl24kl234nkl234
                </span>
              </div>
            </div>

          </div>
        </div>
      </Card>

      <Card title="Transactions" href="/transactions">
        <div>Content</div>
      </Card>

      <Card title="Wallet" href="/wallet">
        <div>Content</div>
      </Card>

      <Card title="Miners" href="/miners">
        <div>Content</div>
      </Card>
    </div>
  );
};

export default GridCards;
