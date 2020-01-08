import React, { Fragment } from 'react';

//AXIOS PARA CONSULTAR LA API || REACT ROUTER DOM PARA LAS URLS
//npm install --save axios react-router-dom

//Layouts
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'

function App() {
  return (
    <Fragment>
      <Header/>

      <Footer/>
    </Fragment>
  )
}

export default App
