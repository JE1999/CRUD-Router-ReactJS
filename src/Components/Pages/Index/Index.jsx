import React, { Fragment } from 'react'

//Utilities
import ListaProductos from '../../Utilities/Index/ListaProductos'

function Index({productos}){

    return(
        <Fragment>
            <div>
                <h3 className="display-4">Mis Productos</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="text-success" scope="col">#</th>
                            <th className="text-success" scope="col">Nombre</th>
                            <th className="text-success" scope="col">Categoria</th>
                            <th className="text-success" scope="col">Precio</th>
                            <th className="text-success" scope="col"><span role="img" aria-label="emoji">🛠️</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(productos => (
                            <ListaProductos
                                key={productos.id}
                                productos={productos}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )

}

export default Index