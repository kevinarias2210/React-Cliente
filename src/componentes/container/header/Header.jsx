import React from "react";
import './header.css';
import logo from "./img/logo_2.png";

export function Header(){
    return(
        <header id="headers" className="header">
            <div className="header__container">
                <img className="header__container--img" src={logo} alt="Logo de Auto Worker"/>
            </div>
        </header> 
    )
}