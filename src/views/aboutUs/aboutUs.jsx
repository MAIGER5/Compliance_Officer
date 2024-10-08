import React from 'react';
import styles from './aboutUs.module.css';
import DataContext from '../../context_Data/dataContext';
import { Boton_Contain, Card_About, Card_Text_Img, dataFooter } from '../../importations/importations';
import { 
  logoDHS, 
  logoJURIDICA, 
  logoKO, 
  logoPSO, 
  logoSEIN, 
  logoSGI, 
  logoTECNI ,
  logosec,
  dataAboutCardX3,
  data_card_Text_Img
} from '../../importations/importations';



export const AboutUs = () => {

  const data = dataFooter;
  const data1= dataAboutCardX3;
  const data2= data_card_Text_Img;
  const images = [  logoDHS, logoJURIDICA, logoKO, logoPSO, logoSEIN, logoSGI, logoTECNI, logosec]

  return (
    <div className={styles.container}>
      <section className={styles.screenBase}>
        <div>
          <h1>PROTEGIENDO TU EMPRESA, ASEGURANDO EL FUTURO</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla velit dicta maxime perferendis eveniet ipsum, </span>
          <Boton_Contain {...data[0]}/>
        </div>
      </section>

      <section className={styles.body}>

        <div className={styles.logos}>
          {
            images?
            images.map((el, index)=>(
              <img 
                key={index}
                src={el} 
                alt=""
              />
            )): ''
          }
        </div>

        <div>
          <DataContext.Provider value={data1}>
            <Card_About/>
          </DataContext.Provider>
        </div>
        <DataContext.Provider value={data2[0]}>
          <Card_Text_Img/>
        </DataContext.Provider>

      </section>


    </div>
  )
}
