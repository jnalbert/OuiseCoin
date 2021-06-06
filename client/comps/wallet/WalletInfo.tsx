import { FC, useState } from "react";
import styles from "../../styles/walletStyles/WalletInfo.module.css";
import hoverLinkStyles from "../../styles/Shared.module.css";
// @ts-ignore
import QRCode from "qrcode.react";

interface WalletInfoProps {
  address: string;
}

interface WalletDataType {
  transactions: number;
  totalReceived: number;
  totalSent: number;
  blocksMined: number;
  balance: number;
}

interface ModeType {
  ouc: "OUC" | null;
  usd: "$" | null;
}

const WalletInfo: FC<WalletInfoProps> = ({ address }) => {

  const [mode, setMode] = useState<ModeType>({ ouc: "OUC", usd: null })
  
  const { ouc, usd } = mode;


  const [walletData, setWalletData] = useState<WalletDataType>({ transactions: 5, totalReceived: 600.577, totalSent: 590.66, blocksMined: 4, balance: 76})

  const { transactions, totalReceived, totalSent, blocksMined, balance } = walletData;

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

      setMode({ouc: null, usd: "$"})

      const newBalance = balance * 0.001;
      const newTotalReceived = totalReceived * 0.001;
      const newTotalSent = totalSent * 0.001;

      setWalletData({ ...walletData, totalReceived: newTotalReceived, totalSent: newTotalSent, balance: newBalance });

      changeToSelected(document.getElementById("usdMode"))
      changeToUnselected(document.getElementById("oucMode"))

    } else if (innerText === "OUC" && ouc === null) {
      setMode({ouc: "OUC", usd: null})
    
      const newBalance = balance / 0.001;
      const newTotalReceived = totalReceived / 0.001;
      const newTotalSent = totalSent / 0.001;

      setWalletData({ ...walletData, totalReceived: newTotalReceived, totalSent: newTotalSent, balance: newBalance });

      changeToSelected(document.getElementById("oucMode"))

      changeToUnselected(document.getElementById("usdMode"))
    }

    
    

  }

  

  return (
    <>
      <div className={styles.balanceWrapper}>
        
        <div className={styles.balanceContainer}>
          <div>
            <span className={styles.infoTitle}>Balance:</span>
            <span className={styles.infoContent}>{usd }{balance} { ouc}</span>
          </div>
        </div>

        <div className={styles.modeContainer}>
            <div id="usdMode" onClick={handleChangeMode} className={[styles.modeLeft, styles.unSelected].join(" ")}>
              USD
            </div>
          <div id="oucMode" onClick={ handleChangeMode } className={[styles.modeRight, styles.selected].join(" ")}>
              OUC
            </div>
          </div>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.qrCodeContainer}>
          <div className={styles.qrCode}>
            <QRCode
              value={`http://localhost:3000/wallets/${address}`}
              size={200}
            />
          </div>
        </div>

        <div className={styles.walletDataContainer}>
          <div className={styles.dataSectionContainer}>
            <div className={styles.dataSection}>
              <span className={styles.name}>Address</span>
            </div>
            <div
              className={[styles.dataSection, hoverLinkStyles.hoverLink].join(" ")}
            >
              alfjawelkfhalwhflawflkwaef
            </div>
          </div>

          <div className={styles.dataSectionContainer}>
            <div className={styles.dataSection}>
              <span className={styles.name}>Format</span>
            </div>
            <div className={[styles.dataSection].join(" ")}>
              <span className={styles.format}>SHA-256</span>
            </div>
          </div>

          <div className={styles.dataSectionContainer}>
            <div className={styles.dataSection}>
              <span className={styles.name}>Transactions</span>
            </div>
            <div className={styles.dataSection}>{transactions}</div>
          </div>

          <div className={styles.dataSectionContainer}>
            <div className={styles.dataSection}>
              <span className={styles.name}>Total Received</span>
            </div>
            <div className={styles.dataSection}>
              {usd}
              {totalReceived} {ouc}
            </div>
          </div>

          <div className={styles.dataSectionContainer}>
            <div className={styles.dataSection}>
              <span className={styles.name}>Total Sent</span>
            </div>
            <div className={styles.dataSection}>
              {usd}
              {totalSent} {ouc}
            </div>
          </div>

          <div className={styles.dataSectionContainer}>
            <div className={styles.dataSection}>
              <span className={styles.name}>Blocks Mined</span>
            </div>
            <div className={styles.dataSection}>{blocksMined}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletInfo;