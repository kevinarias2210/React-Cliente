import React from "react";
import flecha from "./img/arrow.png";
import './home.css';
import { Link } from "react-scroll";

export function Home (){
    return(
        <section className="section3">
            <div className="section3__btnHome">
                <Link to="headers" spy={true} smooth={true} offset={-100} duration={500} href="#headers">
                    <img className="section3__btnHome--img" src={flecha} alt="flecha arriba" />
                </Link>
            </div>
        </section>
        
    )
}