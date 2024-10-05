import React, { useEffect } from 'react'

export const useEffect_Styles = (butRef, color, background, border, borderHover, backgroundHover, colorHover, padding, fontweight) => {

  useEffect(()=>{

    butRef.current.style.background = background;
    butRef.current.style.color = color;
    butRef.current.style.border = border;
    butRef.current.style.padding = padding;
    butRef.current.style.fontWeight = fontweight;
    butRef.current.style.transition = 'background 0.3s ease-out, border .3s ease-out, color .3s ease-out';


    const handleMouseOver = ()=>{
      if (butRef.current) {
        butRef.current.style.background = backgroundHover;
        butRef.current.style.color = colorHover;
        butRef.current.style.border = borderHover;
      }
    }

    const handleMouseOut = ()=>{
      if (butRef.current) {
        butRef.current.style.background = background;
        butRef.current.style.color = color;
        butRef.current.style.border = border;
      }
    }

    if (butRef.current) {
      butRef.current.addEventListener('mouseover', handleMouseOver)
      butRef.current.addEventListener('mouseout', handleMouseOut)
    }

    return ()=>{
      if (butRef.current) {
        butRef.current.addEventListener('mouseover', handleMouseOver)
        butRef.current.addEventListener('mouseout', handleMouseOut)
        }
    }

  }, [])

}


export const useEffect_Styles_Path = (liRef, pathLocation) =>{

  useEffect(()=>{
    if (pathLocation === '/') {
      liRef.current[0].style.color = '#f95959';
    } else if(pathLocation === '/aboutUs'){
      liRef.current[1].style.color = '#f95959';
    } else{
      liRef.current[0].style.color = '';
      liRef.current[1].style.color = '';
    }

    return()=>{
      liRef.current[0].style.color = '';
      liRef.current[1].style.color = ''
    }
  },[pathLocation])

}

export const useEffect_Style_Border = (liRef) =>{

  useEffect(()=>{

    liRef.current.forEach((li, index)=>{

      const handleMouseOver = ()=>{
        if (li) {
          li.style.borderStyle = 'solid';
          li.style.borderColor = '#f95959';
          li.style.borderWidth = '0 0 2px 0';
        }
      }
  
      const handleMouseOut = ()=>{
        if (li) {
          li.style.border = 'none';
        }
      }
  
      if (li) {
        li.addEventListener('mouseover', handleMouseOver);
        li.addEventListener('mouseout', handleMouseOut);
      }
  
      return ()=>{
        if (li) {
          li.addEventListener('mouseover', handleMouseOver);
          li.addEventListener('mouseout', handleMouseOut);
        }
      }

    })


  },[])
}