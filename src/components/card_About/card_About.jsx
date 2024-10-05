import React, { useContext } from 'react';
import styles from './card_About.module.css';
import DataContext from '../../context_Data/dataContext';
import { useLocation } from 'react-router-dom';



export const Card_About = () => {

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
            <div>
              {ele.iconName} {ele.head}
            </div>
            <span>{ele.title}</span>
            <p>{ele.text}</p>
          </div>
        ))
      }
    </div>
  )
}
