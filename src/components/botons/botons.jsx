import React, { useEffect, useRef } from 'react';
import styles from './botons.module.css';
import { useEffect_Styles } from '../../hooks/useEffect_Styles';


export const Boton_Contain = ({text, color, background, border, borderHover, backgroundHover, colorHover, padding, fontweight}) => {

  const butRef = useRef();

  useEffect_Styles(
    butRef, 
    color, 
    background, 
    border, 
    borderHover, 
    backgroundHover, 
    colorHover, 
    padding, 
    fontweight
  )

  return (
    <button ref={butRef} className={styles.Boton_Contain}>{text}</button>
  )
}