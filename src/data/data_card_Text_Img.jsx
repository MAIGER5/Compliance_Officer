import React from 'react';
import { HiUserGroup } from "react-icons/hi";
import { FaLayerGroup } from "react-icons/fa6";
import { ImMakeGroup } from "react-icons/im";




export const data_card_Text_Img = [
  {
    id:1,
    name:'firstColum',
    subtitle:'Una empresa del Grupo PSo',
    title:'Nuestro Equipo de Trabajo esta Preparado para Ofrecerte Soporte Profesional',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio, totam esse, placeat a commodi dicta quo doloremque omnis aliquid perferendis quaerat tempora atque aspernatur vero? Voluptate velit eos amet.',
    name2:'secondColum',
    imgLink:'https://cdn.masmovil.es/embed/c517aab431222f365fa1268efb1600708413/diferencias_imagen_identidad_destacada.jpg?imagick=1&size=1000',
    miniCard:[
      {
        idMiniCard:1,
        icon:<HiUserGroup/>,
        title2:'Grupo Usuarios',
        subtitle2:'20 - 80 personas'
      },
      {
        idMiniCard:2,
        icon:<FaLayerGroup/>,
        title2:'Grupo Usuarios',
        subtitle2:'20 - 80 personas'
      },
      {
        idMiniCard:3,
        icon:<ImMakeGroup />,
        title2:'Grupo Usuarios',
        subtitle2:'20 - 80 personas'
      },
    ]

  },
  
]
