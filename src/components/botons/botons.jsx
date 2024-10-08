import React, { useEffect, useRef } from 'react';
import styles from './botons.module.css';
import { useEffect_Styles } from '../../hooks/useEffect_Styles';
import { useNavigate } from 'react-router-dom';


export const Boton_Contain = ({text, color, background, border, borderHover, backgroundHover, colorHover, padding, fontweight, link}) => {

  const navigate = useNavigate();

  const butRef = useRef();

  const handleNavigate = (path)=>{
    navigate(path)
  }

  useEffect_Styles(
    butRef, 
    color, 
    background, 
    border, 
    borderHover, 
    backgroundHover, 
    colorHover, 
    padding, 
    fontweight,
    link

  )

  return (
    <button 
      ref={butRef} 
      className={styles.Boton_Contain}
      onClick={()=>handleNavigate(link)}
    >{text}</button>
  )
}