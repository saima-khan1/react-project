import React, { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  imgSrc: string;
  heading: ReactNode;
  children: ReactNode;
  emoji: ReactNode;
}

const Card: React.FC<CardProps> = ({ imgSrc, heading, children, emoji }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="Card" className={styles.cardImg} />
      <div className={styles.cardBody}>
        {/* <h2 className={styles.cardHeading}>{heading}</h2> */}

        {children}
        <h2 className={styles.cardHeading}>
          {heading} {emoji}
        </h2>
      </div>
    </div>
  );
};

export default Card;