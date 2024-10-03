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
} from '../../importations/importations';



export const Home = () => {

  const dataServices = data_cardFloatServices;
  const dataCardX3 = data_cardX3;
  const dataCardImgText = data_card_x2_image_text;
  const dataServicesClaves = data_services_1
  const dataServicesClaves2 = data_services_2

  const [services] = useState(dataServices)
  const [card_x3] = useState(dataCardX3)
  const [servicesClaves] = useState(dataServicesClaves)
  const [servicesClaves2] = useState(dataServicesClaves2)
  const [CardImgText] = useState(dataCardImgText)


  return (
    <div className={styles.container}>
      <section className={styles.screenBase}>
        <div>
          <CardTextScreen/>
        </div>
        <DataContext.Provider value={services}>
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
          Asesorias Integrales de <strong>Cumplimiento</strong> 
        </h1>
        <DataContext.Provider value={card_x3}>
          <Card_x3/>
        </DataContext.Provider>
      </div>
      <div>
        <h1 className={styles.titles}>
          Servicios Claves <strong></strong> 
        </h1>
        <DataContext.Provider value={servicesClaves}>
          <CardServices_Claves/>
        </DataContext.Provider>
        <DataContext.Provider value={servicesClaves2}>
          <CardServices_Claves/>
        </DataContext.Provider>
      </div>
    </div>
  )
}
