import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header(){

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <NavLink className="navbar-brand" to="/">Garto JE</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className="nav-link" 
                                >Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/agregar" 
                                className="nav-link" 
                                activeClassName="active"
                                >Agregar
                            </NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </Fragment>
    )

}

export default Header