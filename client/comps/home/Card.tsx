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
        <Link href={href}>
          <a>
            <h3 className={styles.cardTitle}>{title} &rarr;</h3>
          </a>
        </Link>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Card;
