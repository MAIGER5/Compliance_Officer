import React, { useContext } from 'react';
import styles from './cardServices_Claves.module.css';
import DataContext from '../../context_Data/dataContext';
import { useLocation } from 'react-router-dom';



export const CardServices_Claves = () => {

  const location = useLocation()

  const hanldleLocation = ()=>{
    if (location.pathname !== '/') {
      return styles.boxCard1
    }
  }

  const data = useContext(DataContext)

  return (
    <div className={styles.container}>
      {
        data.map((ele, index)=>(
          <div className={styles.boxCard} key={ele.id}>
            {ele.iconName}
            <span>{ele.title}</span>
            <p>{ele.text}</p>
          </div>
        ))
      }
    </div>
  )
}
