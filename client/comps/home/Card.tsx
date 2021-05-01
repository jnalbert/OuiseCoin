import { FC, ReactNode } from "react";
import Link from "next/link";

import styles from "../../styles/homePage/Card.module.css";

interface CardProps {
  title: String;
  href: any;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, href, children }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <Link href={href}>
            <a>
              <span className={styles.cardTitleText}>{title} &rarr;</span>
            </a>
          </Link>
        </div>
        
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Card;
