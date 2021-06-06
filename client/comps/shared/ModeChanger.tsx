import { FC, useState } from "react";
import styles from "../../styles/modeChanger.module.css";

interface ModeChangerProps {
  changeToUSD: () => void;
  changeToOUC: () => void;
  ouc: "OUC" | null;
  usd: "$" | null;
}

interface ModeType {
  ouc: "OUC" | null;
  usd: "$" | null;
}

const ModeChanger: FC<ModeChangerProps> = ({changeToOUC, changeToUSD, ouc, usd}) => {


  const changeToUnselected = (e: any) => {
    e.classList.replace(styles.selected, styles.unSelected);
  }

  const changeToSelected = (e: any) => {
    e.classList.replace(styles.unSelected, styles.selected);
  }

  const handleChangeMode = (e: any): void => {
    e.preventDefault();

    const innerText = e.target.innerText;

    if (innerText === "USD" && usd === null) {
      
      changeToUSD()

      changeToSelected(document.getElementById("usdMode"))
      changeToUnselected(document.getElementById("oucMode"))

    } else if (innerText === "OUC" && ouc === null) {
    
      changeToOUC();

      changeToSelected(document.getElementById("oucMode"))

      changeToUnselected(document.getElementById("usdMode"))
    }

  }
  return (
    <div className={styles.modeContainer}>
      <div id="usdMode" onClick={handleChangeMode} className={[styles.modeLeft, styles.unSelected].join(" ")}>
        USD
      </div>
      <div id="oucMode" onClick={ handleChangeMode } className={[styles.modeRight, styles.selected].join(" ")}>
        OUC
      </div>
    </div>
  );
};

export default ModeChanger;
