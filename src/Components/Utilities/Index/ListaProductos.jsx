import React from 'react'
import { Link } from 'react-router-dom'

const ListaProductos= ({productos}) =>{

    const { id, nombrePlatillo, categoria, precioPlatillo } = productos

    const eliminarProducto = id =>{
        console.log("eliminando", id)
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