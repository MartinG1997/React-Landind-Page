import {NavLink } from "react-router-dom";
import reactimage from '../../assets/react.svg';
import './Navbar.css'
import { Contacto } from "../contacto/Contacto";

export const Navbar = () => {
    return(
        <>
          <nav>
            <div>
                {<NavLink className="logo">
                    <img src={reactimage} alt="" />
                    <span>Hola</span>
                </NavLink>}
            </div>
            <div className="menu">
                <NavLink to="/">
                    Inicio
                </NavLink>
                <NavLink>
                    Servicios
                </NavLink>
                <NavLink to='/contacto'>
                    Contactanos
                </NavLink>
            </div>
          </nav>
        </>
    )
}