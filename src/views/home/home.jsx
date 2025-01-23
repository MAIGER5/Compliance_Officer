import React, { useState } from 'react';
import styles from './home.module.css';
import DataContext from '../../context_Data/dataContext';
import { 
  Card_x3, CardFloatServices, 
  Cards_x2_Image_Text, 
  CardServices_Claves, 
  CardTextScreen, 
  data_card_x2_image_text, 
  data_cardFloatServices, 
  data_cardX3,
  data_services_1,
  data_services_2, 
  CurrentEvents,
  dataCurrentEvents
} from '../../importations/importations';



export const Home = () => {

  const dataServices = data_cardFloatServices;
  const dataCardX3 = data_cardX3;
  const dataCardImgText = data_card_x2_image_text;
  const dataServicesClaves = data_services_1;
  const dataServicesClaves2 = data_services_2;
  const dataCurrenEvent = dataCurrentEvents;


  return (
    <div className={styles.container}>
      <section className={styles.screenBase}>
        <div>
          <CardTextScreen/>
        </div>
        <DataContext.Provider value={dataServices}>
          <CardFloatServices/>
        </DataContext.Provider>
      </section>
      <div className={styles.bodyHome}>
        <DataContext.Provider value={dataCardImgText}>
          <Cards_x2_Image_Text/>
        </DataContext.Provider>
      </div>
      <div>
        <h1 className={styles.titles}>
          Asesorías Integrales de <strong>Cumplimiento</strong> 
        </h1>
        <DataContext.Provider value={dataCardX3}>
          <Card_x3/>
        </DataContext.Provider>
      </div>
      <div>
        <h1 className={styles.titles}>
          Conozca Nuestros <strong>Servicios Claves</strong> 
        </h1>
        <DataContext.Provider value={dataServicesClaves}>
          <CardServices_Claves/>
        </DataContext.Provider>
        <DataContext.Provider value={dataServicesClaves2}>
          <CardServices_Claves/>
        </DataContext.Provider>
      </div>
      <div>
        <h1 className={styles.titles}>
          Nuestros Eventos de  <strong>Actualidad</strong> 
        </h1>
        <DataContext.Provider value={dataCurrenEvent}>
          <CurrentEvents/>
        </DataContext.Provider>
      </div>
      <div>
        <h1 className={styles.titles}>
          Descubra Nuestras Últimas  <strong>Noticias</strong> 
        </h1>
        <DataContext.Provider value={dataCurrenEvent}>
          <CurrentEvents/>
        </DataContext.Provider>
      </div>
    </div>
  )
}
