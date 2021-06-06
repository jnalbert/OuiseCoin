import { FC } from "react";
import styles from "../../../styles/homePage/headerStyles/PendingTrxsHeader.module.css";

const PendingTrxsHeader: FC = () => {
  return (
    <div className={`${styles.contentHeader} ${styles.txnHeader}`}>
      <div style={{ width: "30%" }}>Hash</div>
      <div style={{ width: "22%" }}>Time</div>
      <div style={{ width: "20%" }}>Amount (ouc)</div>
      <div style={{ width: "19%" }}>Amount (USD)</div>
      <div style={{ width: "9%" }}>Confirmed</div>
    </div>
  );
};

export default PendingTrxsHeader;
