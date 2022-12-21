import React from "react";
import './aside.css';
import carro1 from "./img/1.jpeg";
import carro2 from "./img/2.jpeg";
import carro3 from "./img/3.jpeg";
import carro4 from "./img/4.jpeg";
import carro5 from "./img/5.jpeg";
import carro6 from "./img/6.jpeg";
import carro7 from "./img/7.jpeg";
import carro8 from "./img/8.jpeg";
import carro9 from "./img/9.jpeg";

export function Aside(){
    return(
        <aside className="aside">
            <div className="aside__container">
                <h2 className="aside__container--h2">Mi perfil</h2>
                <p className="aside__container--p">Ofrezco servicio de latoneria, reparo todo lo relacionado con colisiones golpes y 
                    abolladuras, también ofrecemos servicio de pintura con los mejores materiales que hay en el mercado, ofrezco 
                    servicio a domicilio para que el cliente no se quede sin carro. Con 30 años de experiencia.</p>
            </div>
            <div className="aside__container2">
                <div className="aside__container2--title">
                    <h2 className="aside__container--h2">Mi trabajo</h2>
                </div>
                <div className="aside__container2--Galery">
                    <a href="#image1">
                        <img className="aside__container2--img" src={carro1} alt="carro" />
                    </a>
                    <a href="#image2">
                        <img className="aside__container2--img" src={carro2} alt="carro" />
                    </a>
                    <a href="#image3">
                        <img className="aside__container2--img" src={carro3} alt="carro" />
                    </a>
                    <a href="#image4">
                        <img className="aside__container2--img" src={carro4} alt="carro" />
                    </a>
                    <a href="#image5">
                        <img className="aside__container2--img" src={carro5} alt="carro" />
                    </a>
                    <a href="#image6">
                        <img className="aside__container2--img" src={carro6} alt="carro" />
                    </a>
                    <a href="#image7">
                        <img className="aside__container2--img" src={carro7} alt="carro" />
                    </a>
                    <a href="#image8">
                        <img className="aside__container2--img" src={carro8} alt="carro" />
                    </a>
                    <a href="#image9">
                        <img className="aside__container2--img" src={carro9} alt="carro" />
                    </a>
                </div>
            </div>
        </aside>
    )
}