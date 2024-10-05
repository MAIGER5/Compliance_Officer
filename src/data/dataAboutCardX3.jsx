import React from 'react';
import { GiStairsGoal } from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";
import { MdEmojiObjects } from "react-icons/md";

export const dataAboutCardX3 = [

  {
    id: 1,
    iconName: <MdHistoryEdu/>,
    head:'Hitoria',
    title: 'Implementación de Programas',
    text: 'Diseño de políticas y procedimientos para asegurar el cumplimiento normativo en la organización.'
  },
  {
    id: 2,
    iconName: <MdEmojiObjects/>,
    title: 'Evaluación de Riesgos',
    head:'Misión',
    text: 'Identificación y análisis de riesgos regulatorios, legales y financieros para minimizar posibles sanciones.'
  },
  {
    id: 3,
    iconName: <GiStairsGoal/>,
    head:'Visión',
    title: 'Monitoreo y Auditorías Internas',
    text: 'Verificación continua de que la empresa cumple con las normativas y auditorías internas para detectar posibles incumplimientos.'
  },
  // {
  //   id: 4,
  //   iconName: <GrValidate/>,
  //   title: 'Formación y Capacitación',
  //   text: 'Entrenamiento del personal en temas de cumplimiento normativo, ética corporativa, y prevención de riesgos.'
  // },

]