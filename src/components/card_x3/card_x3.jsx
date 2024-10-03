import React, { useContext } from 'react';
import styles from './card_x3.module.css'
import DataContext from '../../context_Data/dataContext';


export const Card_x3 = () => {

  const data = useContext(DataContext);

  if (!Array.isArray(data) || !data?.length) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.container}>
      {
        data.map((ele, index)=>(
          <div key={ele.id} className={styles.boxCard}>
            <div>
              {ele.icon}
            </div>
            <h1>{ele.title}</h1>
            <p>{ele.text}</p>
            <div className={styles.botonIr}>Ir</div>
            
          </div>
        ))
      }
    </div>
  )
}
