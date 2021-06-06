import { FC } from 'react';
import styles from "../../../styles/homePage/headerStyles/BlocksHeader.module.css";

const BlocksHeader: FC = () => {
  return (
    <div className={styles.contentHeader}>
          <div style={{width: "15%"}}>Index</div>
          <div style={{width: "25%"}}>Mined</div>
          <div style={{width: "28%"}}>Miner</div>
          <div style={{width: "32%"}}>Hash</div>
    </div>
  )
}

export default BlocksHeader
