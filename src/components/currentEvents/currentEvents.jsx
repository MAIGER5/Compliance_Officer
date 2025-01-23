import React, { useContext } from 'react';
import styles from './currentEvents.module.css'
import EventCard from './eventCard/eventCard';
import DataContext from '../../context_Data/dataContext';


export const CurrentEvents = () => {

  const data = useContext(DataContext)

  if (!Array.isArray(data) || !data?.length) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.container}>
      {
        data?
        data.map((ele)=>(
          <EventCard
            key={ele.id}
            id={ele.id}
            title={ele.title}
            date={ele.date}
            imagen={ele.imagen}
            description={ele.description}
            details={ele.details}
            link={ele.link}
          />
        ))
        :''
      }
    </div>
  )
}
