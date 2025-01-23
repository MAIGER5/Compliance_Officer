import React, { useEffect, useRef, useState } from 'react';
import styles from './navBar.module.css';
import {Link, useLocation} from 'react-router-dom'
import logo from '../../media/LogoFondo.png';
import { dataNavbarMenu } from '../../data/data_navBar';
import { useEffect_Style_Border, useEffect_Styles_Path } from '../../hooks/useEffect_Styles';
import { WhatsApp } from '../whatsApp/whatsApp';

export const NavBar = () => {

  const location = useLocation()

  const liRef = useRef([])

  const dataNavMenu = dataNavbarMenu;

  useEffect_Styles_Path(liRef, location.pathname)

  useEffect_Style_Border(liRef)
  
  return (
    <div className={styles.container}>
      <Link to={'/'}>
        < img src={logo} alt="" />
      </Link>
      <ul>
        {
          dataNavMenu?
          dataNavMenu.map((li, index)=>(
            <li 
              key={li.id}
            >
              <Link to={li.link}
                ref={el => liRef.current[index] = el}
              >
                {li.icon}{li.tilte}
              </Link>              
            </li>
          )):''
        }
      </ul>
      <WhatsApp/>
    </div>
  )
}
