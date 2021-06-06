import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/Shared.module.css"

interface BlockProps {
  index: number;
  mined: string;
  miner: string;
  hash: string;
  border: boolean;
}

const Block: FC<BlockProps> = ({index, mined, miner, hash, border}) => {
  return (
    <div className={styles.section}>
      <div style={{width: "15%"}}>
        <div className={styles.spanWrapper}>
          <Link href={`/blockchain/blocks/${hash}`}>
            <a>
              <span className={`${styles.blockSpan} ${styles.hoverLink}`}>{ index }</span>
            </a>
          </Link>
          
        </div>
      </div>

      <div style={{width: "25%"}}>
        <div className={styles.spanWrapper}>
          <span className={styles.blockSpan}>{ mined }</span>
        </div>
      </div>

      <div className={`${styles.hiddenText}`} style={{width: "28%"}}>
        <div className={`${styles.spanWrapper} ${styles.hiddenText}`}>
          <Link href={`/wallets/${miner}`}>
            <a>
              <span className={`${styles.blockSpan} ${styles.hoverLink}`}>{ miner }</span>
            </a>
          </Link>
          
        </div>
      </div>

      <div className={`${styles.hiddenText}`} style={{width: "32%"}}>
        <div className={`${styles.spanWrapper} ${styles.hiddenText}`}>
          <Link href={`/blockchain/blocks/${hash}`}>
            <a>
              <span className={`${styles.blockSpan} ${styles.hoverLink}`}>{ hash }</span>
            </a>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Block;
