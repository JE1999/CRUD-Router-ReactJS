import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//AXIOS PARA CONSULTAR LA API || REACT ROUTER DOM PARA LAS URLS
//npm install --save axios react-router-dom

//Json-server para crear el servidor con el siguiente comando
//Esto se ejecutara despues que tengas listo el db.json
//npm install -g json-server
//........................//
//npx json-server db.json -p 4000
//-p 4000 = puerto 4000

//.....................//
//En caso de que no funcione ejecutar de primero el siguiente comando...
//npm install json-server
//.....................//


//Layouts
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'

//Pages
import Index from './Components/Pages/Index/Index'
import Agregar from './Components/Pages/Agregar/Agregar'
import Editar from './Components/Pages/Editar/Editar'

function App() {

  const [ productos, setProductos ] = useState([])
    
  useEffect(() => {
      
      const consultarApi= async () =>{

          const url = `http://localhost:4000/restaurant`

          const resultado = await Axios.get(url)

          setProductos(resultado.data)

      }

      consultarApi()

  }, [])

  return (
    <Router>
        <Header/>
        
        <main className="container my-5 text-center">
          <Switch>
            <Route exact path="/" render={() =>(
              <Index 
                productos={productos}
              />
            )} />
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
