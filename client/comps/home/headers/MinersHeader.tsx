import { FC } from "react";
import styles from "../../../styles/homePage/headerStyles/MinersHeader.module.css";

const MinersHeader: FC = () => {
  return (
    <div className={styles.contentHeader}>
          <div style={{width: "36%"}}>Address</div>
          <div style={{width: "18%"}}>Blocks Mined</div>
          <div style={{width: "23%"}}>OUC Mined</div>
          <div style={{width: "23%"}}>USD Mined</div>
    </div>
  )
}

export default MinersHeader
