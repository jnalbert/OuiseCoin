import { FC } from "react";

import styles from "../../styles/homePage/InfoBar.module.css";

const InfoBar: FC = () => {
  const price = 0.001;
  const marketCap = 100;
  const daysVolume = 100;
  const coinsCirculating = 2000;
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoSection}>
        <div className={styles.infoTitle}>Price:</div>
        <div className={styles.infoContent}>{`$${price}`}</div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoTitle}>MarketCap:</div>
        <div className={styles.infoContent}>{`$${marketCap}`}</div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoTitle}>Days Volume (ouc):</div>
        <div className={styles.infoContent}>{`${daysVolume} OUC`}</div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoTitle}>Coins circulating:</div>
        <div className={styles.infoContent}>{`${coinsCirculating} OUC`}</div>
      </div>
    </div>
  );
};

export default InfoBar;
