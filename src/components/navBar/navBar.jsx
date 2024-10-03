import React from 'react';
import styles from './navBar.module.css';
import { Boton_Contain } from '../botons/botons';
import { dataNavbar } from '../../data/data_navBar';
import logo from '../../media/logopng.png'

export const NavBar = () => {

  const data = dataNavbar;
  const dataBoton = data[0]
  
  
  return (
    <div className={styles.container}>
      <div>
      < img src={logo} alt="" />
      </div>
      <ul>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Acerca de Nosotros</li>
      </ul>
      <Boton_Contain {...dataBoton}/>
    </div>
  )
}
