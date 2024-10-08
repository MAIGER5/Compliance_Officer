import React, { useContext } from 'react';
import styles from './card_Text_Img.module.css';
import DataContext from '../../context_Data/dataContext';
import { Boton_Contain } from '../botons/botons';
import { dataBotons } from '../../data/dataBotons';

export const Card_Text_Img = () => {

  const context = useContext(DataContext)

  const data = dataBotons
  const {subtitle, title, description, imgLink, miniCard} = context;

  return (
    <div className={styles.container}>
      <div className={styles.firstColumn}>
        <div>
          <span className={styles.subtitle}>{subtitle}</span>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.description}>{description}</span>
          <Boton_Contain {...data[0]} />
        </div>
      </div>
      <div className={styles.secondColumn}>
        <div>
          <img src={imgLink} alt="" />
        </div>
        <div className={styles.miniCard}>
          {
            miniCard?
            miniCard.map((el)=>(
              <div key={el.idMiniCard}>
                  <div className={styles.miniCartInto}>
                    {el.icon}
                    <div>
                      <span className={styles.minicardTitle}>{el.title2}</span>
                      <span className={styles.minicardSubTitle}>{el.subtitle2}</span>
                    </div>
                  </div>
              </div>
            )):''
          }
        </div>
      </div>


    </div>
  )
}
