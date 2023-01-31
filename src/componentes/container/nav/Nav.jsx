import React from "react";
import { Link as LinkScroll } from "react-scroll";//Cambie el nombre de este link porque me confundia y pensé que era el mismo para enrutar
import { Link } from 'react-router-dom';//Este link es el de las rutas
import car from "./img/carro.jpg";
import person from "./img/latonero.jpeg";
import './nav.css';

export default function Nav(){
    const urlPathname = window.location.pathname;//Cree una constante donde recibe el enlace "/" que guarda la ruta
    const urlPathSplit = urlPathname.split('/');//En esta parte guardé en otra constante donde el urlPathname se guarde en un array

    const isUrlContact = urlPathSplit[1] === 'contacto';//Como solo hay 3 botones, el contacto queda con el induce 1

    console.log(isUrlContact)
    return (
            <nav className="nav">
                <div className="nav__container">
                    <div className="nav__container--color"></div>
                    <div className="nav__container--img">
                        <img className="nav__container--carro" src={car} alt="car" />
                    </div>
                    <div className="nav__container--latonero">
                        <div className="nav__container--person">
                            <img className="nav__container--tio" src={person} alt="" />
                        </div>
                        <div className="nav__container--parrafo">
                            <p className="nav__container--nombre">Jorge Duarte Galvis - Latonero</p>
                        </div>
                    </div>
                </div>
            <div className="nav__navegation">
                <div className="nav__navegation--botton">
                    {isUrlContact ? (/* Si isUrlContact contacto está muestra home */
                        <Link to="/" className="nav__navegation--boton">Home</Link>
                    ) : /* Si no pasa a la seccion del trabajo */ (
                        <LinkScroll to="asides" spy={true} smooth={true} offset={-20} duration={500} className="nav__navegation--boton">Mi perfil y mi trabajo</LinkScroll>
                    )}
                    <Link to="/contacto" className="nav__navegation--boton">Contactame</Link>
                    {!isUrlContact && (/* Si isUrlContact no está contacto YY está muestra eso*/
                        <LinkScroll to="cracks" spy={true} smooth={true} offset={-150} duration={500} className="nav__navegation--boton" href="/">Tipo de choque</LinkScroll>
                    )}
                    {/*isUrlContact ? (
                        <Link to="/#asides" className="nav__navegation--boton">Mi perfil y mi trabajo</Link>
                    ) : (
                        <LinkScroll to="asides" spy={true} smooth={true} offset={-20} duration={500} className="nav__navegation--boton">Mi perfil y mi trabajo</LinkScroll>
                    )}
                    <Link to="/contacto" className="nav__navegation--boton">Contactame</Link>
                    {isUrlContact ? (
                        <Link to="/#cracks" className="nav__navegation--boton">Tipo de choque</Link>
                    ) : (
                        <LinkScroll to="cracks" spy={true} smooth={true} offset={-150} duration={500} className="nav__navegation--boton" href="/">Tipo de choque</LinkScroll>
                    ) */}
                </div>
            </div>
        </nav>
    )
}