import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header(){

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand" to="/">Hartura JE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink 
                                to="/agregar" 
                                className="nav-link" 
                                activeClassName="active"
                                >Agregar
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )

}

export default Header