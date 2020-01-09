import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//AXIOS PARA CONSULTAR LA API || REACT ROUTER DOM PARA LAS URLS
//npm install --save axios react-router-dom

//Layouts
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'

//Pages
import Index from './Components/Pages/Index/Index'
import Agregar from './Components/Pages/Agregar/Agregar'
import Editar from './Components/Pages/Editar/Editar'

function App() {
  return (
    <Router>
        <Header/>
        
        <main className="my-5 text-center">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/agregar" component={Agregar} />

            {/* Se recomienda tener de ultimo lo que pasamos por parametros como por ejemplo la siguiente ruta */}
            <Route exact path="/editar/:id" component={Editar} />
          </Switch>
        </main>

        <Footer/>
    </Router>
  )
}

export default App
