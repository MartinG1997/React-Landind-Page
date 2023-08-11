import {NavLink } from "react-router-dom";
import reactimage from '../../assets/react.svg';
import './Navbar.css'
import { Contacto } from "../contacto/Contacto";

export const Navbar = () => {
    return(
        <>
          <nav>
            <div>
                {<NavLink className="logo" to="/">
                    <img src={reactimage} alt="" />
                    <span>Hola</span>
                </NavLink>}
            </div>
            <div className="menu">
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink to='/Servicios'>
                    Servicios
                </NavLink>
            </div>
          </nav>
        </>
    )
}