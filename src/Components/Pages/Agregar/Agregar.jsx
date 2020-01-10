import React, { Fragment, useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'

//Utilities
import Error from '../../Utilities/Error/Error'

function Agregar({history, setRecarga}){

    const [ nombre, setNombre ] = useState('')
    const [ precio, setPrecio ] = useState('')
    const [ categoria, setCategoria ] = useState('')

    const [ error, setError ] = useState(false)

    const leerCategoria = e =>{
        setCategoria(e.target.value)
    }

    const handleSubmit = async e =>{
        e.preventDefault()

        if( nombre === '' || precio === '' || categoria === '' ){
            setError(true)
            return
        }

        setError(false)

        try {
            
            const url = "http://localhost:4000/restaurant"

            const resultado = await Axios.post(url, {
                nombrePlatillo : nombre,
                precioPlatillo : precio,
                categoria
            })

            if(resultado.status === 201){
                Swal.fire(
                    'Agregado!',
                    'El platillo se agrego correctamente!',
                    'success'
                )
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un problema!',
            })
        }

        setRecarga(true)
        
        //Redirigir al inicio
        history.push('/')

    }

    const mensajeError = (error) ? <Error/> : null;

    return(
        <Fragment>
            <div className="col-md-8 mx-auto ">
                <h3 className="display-4">Agregar Nuevo Producto</h3>
                {mensajeError}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label>Nombre Platillo</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre" 
                            placeholder="Nombre Platillo"
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Precio Platillo</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="precio"
                            placeholder="Precio Platillo"
                            onChange={e => setPrecio(e.target.value)}
                        />
                    </div>

                    <legend className="text-center">Categoría:</legend>
                    <div className="text-center">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="categoria"
                            value="postre"
                            onChange={leerCategoria}
                        />
                        <label className="form-check-label">
                            Postre
                        </label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="categoria"
                            value="bebida"
                            onChange={leerCategoria}
                        />
                        <label className="form-check-label">
                            Bebida
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="categoria"
                            value="cortes"
                            onChange={leerCategoria}
                        />
                        <label className="form-check-label">
                            Cortes
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="categoria"
                            value="ensalada"
                            onChange={leerCategoria}
                        />
                        <label className="form-check-label">
                            Ensalada
                        </label>
                    </div>
                    </div>

                    <input type="submit" className="text-uppercase mt-5 btn btn-success btn-block" value="Agregar Producto" />
                </form>
            </div>
        </Fragment>
    )

}

export default withRouter(Agregar)