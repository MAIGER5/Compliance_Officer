import React from 'react';
import styles from './whatsApp.module.css';
import { SiWhatsapp } from "react-icons/si";
import whatsAppLogo from '../../media/whatsAppLogo.png'
import { useLocation } from 'react-router-dom';

export const WhatsApp = () => {
  
  const location = useLocation();

  const phoneNumber = "573160495779";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer" // Seguridad para abrir en nueva pestaña
      className={styles.whatsappButton} // Clase CSS opcional
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  )
}
