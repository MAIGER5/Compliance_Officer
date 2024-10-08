import {  } from 'react';
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import { AboutUs, Contact, Footer, Home, NavBar } from './importations/importations';

function App() {

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
