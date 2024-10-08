import React from 'react';
import styles from './cardTextScreen.module.css';
import { AdvancedImage } from '@cloudinary/react';
import { Boton_Contain } from '../botons/botons';
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
            <span>2024</span>
          </div>
          <h1 className={styles.firstLine}>GARANTIA DE CONFIANZA</h1>
        </div>
        <Boton_Contain {...dataBoton} />
      </section>
      {/* <section>
        <span>Nos comprometemos a ser un socio estratégico que protege tu reputación y fomenta una cultura corporativa de transparencia y responsabilidad. </span>
        <div>
          <div className={styles.boxExpProyect}>
            <span>18 <strong>+</strong></span>
            <span>Años de <br /> Experiencia</span>
          </div>
          <div className={styles.boxExpProyect}>
            <span>60 <strong>+</strong></span>
            <span>Proyectos <br /> Completados</span>
          </div>
          <div className={styles.boxExpProyect}>
            <span>150 <strong>+</strong></span>
            <span>Compañias Consultadas</span>
          </div>
        </div>
      </section> */}
    </div>
  )
}
