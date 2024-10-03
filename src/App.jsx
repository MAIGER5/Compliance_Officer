import {  } from 'react';
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import { Footer, Home, NavBar } from './importations/importations';

function App() {

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
