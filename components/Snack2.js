import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Snack1.module.css';
import doritosImage from './doritos.png'; 

function Snack2() {
  return (
    <div className={styles['snack1-container']}>
      <h2 className={styles['snack-title']}>You've selected Doritos</h2>
      <img src={doritosImage} alt="Doritos" width="200" />
      <p className={styles['snack-description']}>Details about Snack 1</p>
      <Link to="/vending-machine" className={styles['back-link']}>
        Back to Vending Machine
      </Link>
    </div>
  );
}

export default Snack2;
