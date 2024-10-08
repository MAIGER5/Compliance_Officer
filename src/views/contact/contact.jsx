import React, { useState } from 'react';
import styles from './contact.module.css';
import { number } from 'prop-types';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

// import { registerUserAction } from '../../../Redux/Actions/registerUserAction';


export const Contact = () => {

  const nagivate = useNavigate();

  const [ register, setRegister] = useState(false)

  const [formSignIn, setFormSignIn] = useState({

    mail:'',
    password:''

  });

  const [formSignUp, setFormSignUp] = useState({
    
    name:'',
    nit: number,
    phone: number,
    mail:'',
    message:'',
    aceptConditions:'',

  });

  const handleFormSignIn = (event)=>{

    event.preventDefault()

    const property = event.target.name;
    const value = event.target.value

    setFormSignIn({
      ...formSignIn,
      [property]:value
    })

  }

  const handleLogin = (event)=>{
    event.preventDefault();

    setFormSignUp({
    
      name:'',
      nit: number,
      phone: number,
      mail:'',
      message:'',
      aceptConditions:'',
  
    })
  }

  const handleFormSignUp = (event)=>{
    event.preventDefault()

    const property = event.target.name;
    const value = event.target.value;

    setFormSignUp({
      ...formSignUp,
      [property]:value,
    })
  }

  const HhandleChangeForm = (event)=>{
    event === 'no'
    ? setRegister(true)
    : setRegister(false)
  }

  const handleNavigate = (path)=>{
    nagivate(path)
  }


  return (
    <main className={styles.contenedor}>

      {/* <p onClick={()=> handleNavigate('/carmeuseMas')} >Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></p> */}

      <section className={styles.contSection}>

        <div className={styles.screenForm} id={styles.inicio}> 
          <img src="https://previews.123rf.com/images/eddtoro35/eddtoro351108/eddtoro35110800743/10331780-washington-dc-9-de-julio-traje-espacial-de-la-misi%C3%B3n-sts-128-de-la-nasa-a-la-estaci%C3%B3n-espacial.jpg" alt="" />
        </div>

        <form onSubmit={handleLogin} action="" className={styles.textForm} id={styles.resgistro}>
            <div>
              <h1>Petición de Cliente</h1>
            </div>
            <input 
              type="text"
              name='name'
              placeholder='Nombre completo'
              value={formSignUp.name}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="number"
              name='nit'
              placeholder='Nit o Cédula'
              value={formSignUp.nit}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="email"
              name='mail'
              placeholder='Correo electrónico'
              value={formSignUp.mail}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="number"
              name='phone'
              placeholder='Número de contacto'
              value={formSignUp.phone}
              onChange={handleFormSignUp}
              required
            />
            <input 
              type="text"
              name='message'
              placeholder='Escriba su mensaje'
              value={formSignUp.message}
              onChange={handleFormSignUp}
              required
            />
            {/* <input 
              type="password"
              name='password2'
              placeholder='Repite la contraseña'
              value={formSignUp.password2}
              onChange={handleFormSignUp}
              required
            /> */}
            <button type='submit'>Enviar</button>
            {/* <span>Sujeto a validación del Administrador</span>
            <p>Tiene una cuenta? <span onClick={()=> HhandleChangeForm("si")}>Inicie sesión aquí</span></p> */}
        </form>
          
      </section>
    </main>
  )
}
