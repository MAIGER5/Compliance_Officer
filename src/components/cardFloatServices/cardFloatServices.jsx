import React, { useContext } from 'react';
import DataContext from '../../context_Data/dataContext';
import styles from './cardFloatServices.module.css';

export const CardFloatServices = () => {

  const data = useContext(DataContext);

  if (!Array.isArray(data) || !data?.length) {
    return <div>No data available</div>;
  }
  
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
