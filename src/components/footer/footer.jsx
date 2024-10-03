import React from 'react';
import styles from './footer.module.css';
import { dataFooter } from '../../data/dataFooter';
import { Boton_Contain } from '../botons/botons';

export const Footer = () => {

  const data = dataFooter[0];

  return (
    <div className={styles.container}>
      <div>TU OFICIAL DE CUMPLIMIENTO</div>
      <div>
        <span>Información de la Compañia</span>
        <span>Carrera 46 # 10 Sur - 56</span>
        <span>Medellín - Antioquía</span>
        <span>3113397091</span>
      </div>
      <div>
        <span>Contactanos</span>
        <span>gerencia@tuoficialdecumplimiento.com.co</span>
        <Boton_Contain {...data}/>
      </div>
      <div>
        <></>
        <span>Como tu oficial de cumplimiento, garantizamos la transparencia y el respeto a las normativas vigentes.</span>
      </div>
    </div>
  )
}
