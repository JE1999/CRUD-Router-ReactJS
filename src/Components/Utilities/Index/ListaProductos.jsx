import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Axios from 'axios'

const ListaProductos= ({productos, setRecarga}) =>{

    const { id, nombrePlatillo, categoria, precioPlatillo } = productos

    const eliminarProducto = id =>{

        Swal.fire({
            title: 'Desea Eliminarlo?',
            text: "Seguro que deseas eliminar este producto?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Confirmar',
            cancelButtonText: 'Cancelar'
          }).then( async (result) => {
            if (result.value) {

                try {
                    
                    const url = `http://localhost:4000/restaurant/${id}`

                    const resultado = await Axios.delete(url)
    
                    if(resultado.status === 200){
                        Swal.fire(
                            'Eliminado!',
                            'Eliminado correctamente.',
                            'success'
                        )
                        
                        setRecarga(true)
                    }

                } catch (error) {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ha ocurrido un problema!',
                    })
                }

            }
          })

    }

    return(
        <tr data-categoria={categoria}>
            <th className="text-success" scope="row">{id}</th>
            <td>{nombrePlatillo}</td>
            <td>{categoria}</td>
            <td><span className="text-success">$ </span>{precioPlatillo}</td>
            <td>
                <Link 
                    to={`/editar/${id}`}
                    className="btn btn-sm btn-warning m-1">Editar</Link>
                <button 
                    onClick={() => eliminarProducto(id)}
                    className="btn btn-sm btn-danger m-1">X</button>
            </td>
        </tr>
    )
}

export default ListaProductos