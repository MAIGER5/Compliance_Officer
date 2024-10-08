import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";


export const dataNavbar = [
  {
    text:'Contáctanos',
    color:'rgb(255, 255, 255, 255)',
    background:'transparent',
    border:'1px solid #f95959',
    borderHover:'',
    backgroundHover:'#49a0cc',
    colorHover:'233142',
    padding:'',
    fontweight:'700',
    link:'/contact'
  },
]


export const dataNavbarMenu = [
  {
    id:1,
    tilte:'Inicio',
    icon:<AiFillHome/>,
    link:'/'
  },
  // {
  //   id:2,
  //   tilte:'Servicios',
  //   icon:<MdOutlineMiscellaneousServices/>
  // },
  {
    id:3,
    tilte:'Acerca de Nosotros',
    icon:<FaUserGroup/>,
    link:'/aboutUs'
  },
]