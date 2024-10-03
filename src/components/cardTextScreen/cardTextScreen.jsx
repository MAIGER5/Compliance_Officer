import React from 'react';
import styles from './cardTextScreen.module.css';
import { AdvancedImage } from '@cloudinary/react';


export const CardTextScreen = () => {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.firstLine}>TU OFICIAL DE <strong>CUMPLIMIENTO</strong></h1>
        <div className={styles.secondLine}>
          <div className={styles.year}>
            <span>Efectividad</span>
            <span>2024</span>
          </div>
          <h1>GARANTIA DE CONFIANZA</h1>
        </div>
        {/* <div className={styles.imagen}>
          <AdvancedImage cldImg={image2}/>
        </div> */}
      </section>
      <section>
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
      </section>
    </div>
  )
}
