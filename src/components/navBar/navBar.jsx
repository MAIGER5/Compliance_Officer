import React, { useEffect, useRef, useState } from 'react';
import styles from './navBar.module.css';
import {useLocation, useNavigate} from 'react-router-dom'
import { Boton_Contain } from '../botons/botons';
import logo from '../../media/logopng1.png';
import { dataNavbar, dataNavbarMenu } from '../../data/data_navBar';
import { useEffect_Styles_Path, useEffect_Style_Border } from '../../hooks/useEffect_Styles';

export const NavBar = () => {

  const location = useLocation()

  const liRef = useRef([])

  const navigate = useNavigate();

  const data = dataNavbar;
  const dataBoton = data[0]
  const dataNavMenu = dataNavbarMenu;

  const handleNavigate = (path)=>{
    navigate(path)
  }

  useEffect_Styles_Path(liRef, location.pathname)

  useEffect_Style_Border(liRef)
  
  return (
    <div className={styles.container}>
      <div>
      < img src={logo} alt="" />
      </div>
      <ul>
        {
          dataNavMenu?
          dataNavMenu.map((li, index)=>(
            <li 
              key={li.id}
              ref={el => liRef.current[index] = el}
              onClick={()=>handleNavigate(li.link)}
            >
              {li.icon}{li.tilte}
            </li>
          )):''
        }
      </ul>
      <Boton_Contain {...dataBoton} />
    </div>
  )
}
