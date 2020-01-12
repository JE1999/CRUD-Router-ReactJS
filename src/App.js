import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Layouts
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'

//Pages
import Index from './Components/Pages/Index/Index'
import Agregar from './Components/Pages/Agregar/Agregar'
import Editar from './Components/Pages/Editar/Editar'

function App() {

  const [ productos, setProductos ] = useState([])

  const [ recarga, setRecarga ] = useState(true)
    
  useEffect(() => {
      
    if(recarga){
        
        const consultarApi= async () =>{

        const url = "http://localhost:4000/restaurant"

        const resultado = await Axios.get(url)

        setProductos(resultado.data)
        setRecarga(false)

      }

      consultarApi()

    }

  }, [recarga])

  return (
    <Router>
        <Header/>
        
        <main className="container my-5 text-center">
          <Switch>
            <Route exact path="/" render={() =>(
              <Index
                setRecarga={setRecarga}
                productos={productos}
              />
            )} />
            <Route exact path="/agregar" render={() =>(
              <Agregar
                setRecarga={setRecarga}
              />
            )} />

            {/* Se recomienda tener de ultimo lo que pasamos por parametros como por ejemplo la siguiente ruta */}
            <Route exact path="/editar/:id" render={props =>{

              const idProducto = parseInt(props.match.params.id) 
              const producto = productos.filter(productoFilter => productoFilter.id === idProducto)

              return(
                <Editar
                  producto={producto[0]}
                  setRecarga={setRecarga}
                />
              )

            }} />
          </Switch>
        </main>

        <Footer/>
    </Router>
  )
}

export default App
