import React, { useEffect, useRef } from 'react';
import styles from './socialMedia.module.css'
import { Socialmedia_Data } from '../../data/socialMedia_Data';

export const SocialMedia = () => {

  const data = Socialmedia_Data;

  const divRefs = useRef([]);

  useEffect(()=>{
    divRefs.current.forEach((div, index) => {
      if(div){
        div.style.transition = 'background .5s, transform .5s'
        div.addEventListener('mouseover', ()=>{
          div.style.background = data[index].color;
          div.style.transform = 'scale(1.4)'
          setTimeout(() => {
            div.style.transform = 'scale(1)'
          }, 150);
        })

        div.addEventListener('mouseout', ()=>{
          div.style.background = '';
        })
      }
    })

    return ()=>{
      divRefs.current.forEach(div => {
        if(div){
          div.removeEventListener('mouseover', ()=> {})
          div.removeEventListener('mouseout', ()=> {})
        }
      })
    }
  },[])


  


  return (
    <div className={styles.container}>
      {
        data? data.map((media, index)=>(
          <div 
            key={media.id}
            ref={el => divRefs.current[index] = el}
          >
            {media.iconName}
          </div>
        )):''
      }
    </div>
  )
}
