import React from 'react';
import styles from './cardTextScreen.module.css';
import imgScreen from '../../media/screen.webp'
import { AdvancedImage } from '@cloudinary/react';
import { BotonContain } from '../botons/botons';
import { dataFooter } from '../../data/dataFooter';


export const CardTextScreen = () => {

  const data = dataFooter;
  const dataBoton = data[0]

  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.firstLine}>TU OFICIAL DE <strong>CUMPLIMIENTO</strong></h1>
        <div className={styles.secondLine}>
          <div className={styles.year}>
            <span>Efectividad</span>
            <span>2025</span>
          </div>
          <h1 className={styles.firstLine}>GARANTIA DE CONFIANZA</h1>
        </div>
        <BotonContain {...dataBoton} className={styles.botonContact} />
      </section>
    </div>
  )
}
