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
