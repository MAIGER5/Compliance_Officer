import React, { useContext } from 'react';
import styles from './cards_x2_Image_Text.module.css';
import DataContext from '../../context_Data/dataContext';
import { AdvancedImage } from '@cloudinary/react';
import { BotonContain, image1 } from '../../importations/importations';

export const Cards_x2_Image_Text = () => {

  const data = useContext(DataContext);
  const dataBotonText = data[0].botonText
  const dataBotonContain = data[0].botonContain
  const dataBotonOutlined = data[0].botonOutlined

  if (!Array.isArray(data) || !data.length) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContain}>
        <AdvancedImage cldImg={image1} />
      </div>
      <div className={styles.textContain}>
        <BotonContain {...dataBotonText}/>
        <div>
          <h1>{data[0].title} <br /> <strong>{data[0].title2}</strong></h1>
          <span>{data[0].description}</span>
          <div className={styles.botons}>
            <BotonContain {...dataBotonContain}/>
            <BotonContain {...dataBotonOutlined}/>
          </div>
        </div>
      </div>
    </div>
  )
}
