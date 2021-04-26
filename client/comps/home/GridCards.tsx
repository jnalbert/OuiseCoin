import { FC } from "react";
import styles from "../../styles/homePage/GridCards.module.css";
import Block from "../shared/Block";
import Transaction from "../shared/Transaction";


import Card from "./Card";
import PendingTrxns from "./PendingTrxns";
import UserWalletContent from "./UserWalletContent";

const GridCards: FC = () => {
  // the max things inside the cards.
  const maxPieces = 6;

  return (
    <div className={styles.grid}>
      <Card title="Blocks" href="/blockchain/blocks">
        <div className={styles.contentHeader}>
          <div style={{width: "15%"}}>Index</div>
          <div style={{width: "25%"}}>Mined</div>
          <div style={{width: "28%"}}>Miner</div>
          <div style={{width: "32%"}}>Hash</div>
        </div>

        <div className={styles.sectionsWrapper}>
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" />
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" />
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" />
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" />
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" />
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" />
        </div>
      </Card>

      <Card title="Transactions" href="/blockchain/transactions">
        <div className={`${styles.contentHeader} ${styles.txnHeader}`}>
          <div style={{width: "30%"}}>Hash</div>
          <div style={{width: "22%"}}>Time</div>
          <div style={{width: "20%"}}>Amount (ouc)</div>
          <div style={{width: "19%"}}>Amount (USD)</div>
          <div style={{width: "9%"}}>Confirmed</div>
        </div>

        <div className={`${styles.sectionsWrapper}`}>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed />
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false}/>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={true} />
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={ false}/>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} />
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false}/>
        </div>
      </Card>

      <Card title="Your Wallet" href="/wallets">
        <UserWalletContent address="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ"/>
        <PendingTrxns address="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ"/>
        
      </Card>

      <Card title="Miners" href="/miners">
        <div>Content</div>
      </Card>
    </div>
  );
};

export default GridCards;
