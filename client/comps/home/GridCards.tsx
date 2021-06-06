import { FC } from "react";
import styles from "../../styles/homePage/GridCards.module.css";
import Block from "../shared/Block";
import Miner from "../shared/Miner";
import Transaction from "../shared/Transaction";


import Card from "./Card";
import BlocksHeader from "./headers/BlocksHeader";
import MinersHeader from "./headers/MinersHeader";
import PendingTrxsHeader from "./headers/PendingTrxsHeader";
import PendingTrxns from "./PendingTransactions/PendingTrxns";
import UserWalletContent from "./UserWalletContent";

const GridCards: FC = () => {
  // the max things inside the cards.
  const maxPieces = 6;

  return (
    <div className={styles.grid}>
      <Card title="Blocks" href="/blockchain/blocks">
        <BlocksHeader />

        <div className={styles.sectionsWrapper}>
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" border={ false}/>
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" border={ false}/>
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" border={ false}/>
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" border={ false}/>
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" border={ false}/>
          <Block index={5} mined="25 seconds" miner="2l423kl42h3lk4n23kl4n2l34h2lh4l2h4k2l342" hash="342kj4h234h2l342hj4kl23h4j2h4jl2b4234jl23b4l2" border={ false}/>
        </div>
      </Card>

      <Card title="Transactions" href="/blockchain/transactions">
        <PendingTrxsHeader />

        <div className={`${styles.sectionsWrapper}`}>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={true} border={ false}/>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={ false}/>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={true} border={ false}/>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={ false} border={ false}/>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={ false}/>
          <Transaction hash="t2lj3hr23ljhr232jlr3234234hjl2lhr3256j8lrh23jlrh23r2l" time="4/24/21 8:55 pm" amountOUC={4.76} amountUSD={0.00556} confirmed={false} border={ false}/>
        </div>
      </Card>

      <Card title="Your Wallet" href="/wallets">
        <UserWalletContent address="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ"/>
        <PendingTrxns address="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ"/>
        
      </Card>

      <Card title="Miners" href="/miners">
        <MinersHeader />

        <div className={`${styles.sectionsWrapper}`}>
          <Miner minerAddress="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ" blocksMined={5} oucMined={239.04} usdMined={3245} border={ false}/>
          <Miner minerAddress="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ" blocksMined={5} oucMined={239.04} usdMined={3245} border={ false}/>
          <Miner minerAddress="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ" blocksMined={5} oucMined={239.04} usdMined={3245} border={ false}/>
          <Miner minerAddress="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ" blocksMined={5} oucMined={239.04} usdMined={3245} border={ false}/>
          <Miner minerAddress="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ" blocksMined={5} oucMined={239.04} usdMined={3245} border={ false}/>
          <Miner minerAddress="38ovTXTuF9Ha1mjgzBFbbZnzDiNkvRSHBZ" blocksMined={5} oucMined={239.04} usdMined={3245} border={ false}/>
        </div>
      </Card>
    </div>
  );
};

export default GridCards;
