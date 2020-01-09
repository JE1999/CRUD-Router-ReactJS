import React from 'react'

const Error = () =>(
    <div className="alert alert-dismissible alert-danger">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <p className="m-0">Todos los campos son requeridos.</p>
    </div>
)

export default Error