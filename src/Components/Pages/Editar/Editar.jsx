import React, { Fragment, useState, useRef } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

//Utilities
import Error from '../../Utilities/Error/Error'

function Editar(props){

    //destructuring de props
    const {producto, history, setRecarga} = props

    //Recomendado para opcion de editar => Ref
    const precioPlatilloRef = useRef('')
    const nombrePlatilloRef = useRef('')

    const [ categoria, setCategoria ] = useState('')

    const [ error, setError ] = useState(false)

    const leerCategoria = e =>{
        setCategoria(e.target.value)
    }

    const handleSubmit = async e =>{
        e.preventDefault()

        const nuevoPrecioPlatillo = precioPlatilloRef.current.value,
              nuevoNombrePlatillo = nombrePlatilloRef.current.value
              
        const categoriaPlatillo = (categoria === '') ? producto.categoria : categoria

        if(nuevoPrecioPlatillo === '' || nuevoNombrePlatillo === '' || categoriaPlatillo === ''){
            setError(true)
            return
        }

        setError(false)
        

        const editarPlatillo = {
            precioPlatillo : nuevoPrecioPlatillo,
            nombrePlatillo : nuevoNombrePlatillo,
            categoria : categoriaPlatillo
        }

        //enviando al Request
        const url = `http://localhost:4000/restaurant/${producto.id}`

        try {

            const resultado = await Axios.put(url, editarPlatillo)

            if(resultado.status === 200){
                Swal.fire(
                    'Editado!',
                    'El Producto se edito correctamente!',
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
        history.push('/')

        }

    const mensajeError = (error) ? <Error/> : null;

    try {

        return(
            <Fragment>
                <div className="col-md-8 mx-auto ">
                    <h3 className="display-4">Editar Producto</h3>
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
                                ref={nombrePlatilloRef}
                                defaultValue={producto.nombrePlatillo}
                            />
                        </div>

                        <div className="form-group">
                            <label>Precio Platillo</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name="precio"
                                placeholder="Precio Platillo"
                                ref={precioPlatilloRef}
                                defaultValue={producto.precioPlatillo}
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
                                defaultChecked={(producto.categoria === 'postre')}
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
                                defaultChecked={(producto.categoria === 'bebida')}
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
                                defaultChecked={(producto.categoria === 'cortes')}

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
                                defaultChecked={(producto.categoria === 'ensalada')}
                            />
                            <label className="form-check-label">
                                Ensalada
                            </label>
                        </div>
                        </div>

                        <input type="submit" className="text-uppercase mt-5 btn btn-warning btn-block" value="Editar Producto" />
                    </form>
                </div>
            </Fragment>
        )

    } catch (error) {
        return(
            <h2 className="display-4">Ha ocurrido un error</h2>
        )
    }

}

export default withRouter(Editar)