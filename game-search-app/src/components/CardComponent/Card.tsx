import React, { ReactNode } from 'react';
import styles from './Card.module.css';


interface CardProps {
  imgSrc: string;
  heading: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ imgSrc, heading, children }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="Card" className={styles.cardImg} />
      <div className={styles.cardBody}>
        <h2 className={styles.cardHeading}>{heading}</h2>

        {children}
      </div>
    </div>
    
  );
};

export default Card;