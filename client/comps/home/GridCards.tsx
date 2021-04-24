import { FC } from "react";
import styles from "../../styles/homePage/GridCards.module.css";

import Card from "./Card";

const GridCards: FC = () => {
  return (
    <div className={styles.grid}>
      <Card title="Blocks" href="/blocks">
        <div>Content</div>
      </Card>

      <Card title="Transactions" href="/transactions">
        <div>Content</div>
      </Card>

      <Card title="Wallet" href="/wallet">
        <div>Content</div>
      </Card>

      <Card title="Miners" href="/miners">
        <div>Content</div>
      </Card>
    </div>
  );
};

export default GridCards;
