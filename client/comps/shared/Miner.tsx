import { FC } from "react";
import styles from "../../styles/Shared.module.css";

import Link from "next/link";

interface MinerProps {
  minerAddress: string;
  blocksMined: number;
  oucMined: number;
  usdMined: number;
}

const Miner: FC<MinerProps> = ({minerAddress, blocksMined, oucMined, usdMined}) => {
  return (
    <div className={styles.section}>

      <div className={`${styles.hiddenText}`} style={{width: "36%"}}>
        <div className={`${styles.spanWrapper} ${styles.hiddenText}`}>
          <Link href={`/wallets/${minerAddress}`}>
            <a>
              <span className={`${styles.blockSpan} ${styles.hoverLink}`}>{ minerAddress }</span>
            </a>
          </Link>
        </div>
      </div>

      <div style={{width: "18%"}}>
        <div className={styles.spanWrapper}>
          <span className={styles.blockSpan}>{ blocksMined }</span>
        </div>
      </div>

      <div style={{width: "23%"}}>
        <div className={`${styles.spanWrapper}`}>
              <span className={`${styles.blockSpan}`}>{ oucMined } OUC</span>
        </div>
      </div>

      <div style={{width: "23%"}}>
        <div className={`${styles.spanWrapper}`}>
              <span className={`${styles.blockSpan}`}>${ usdMined }</span>
        </div>
      </div>
    </div>
  )
}

export default Miner
