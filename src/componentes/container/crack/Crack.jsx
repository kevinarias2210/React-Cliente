import React, { useState } from "react";
/* import { Link } from 'react-router-dom'; */
import './crack.css';
import car1 from './img/1.png';
import car2 from './img/2.jpg';
import car3 from './img/3.jpg';
import Modal from "../modal/Modal";
import Front from "../car/Front";
import Center from "../car/Center";
import Back from "../car/Back";

export function Crack (){
    const [stateModal1, changeModal1] = useState(false);
    const [stateModal2, changeModal2] = useState(false);
    const [stateModal3, changeModal3] = useState(false);

    return(
        <section className="car">
            <h2 id="cracks" className="aside__container--h2">Tipo de daño</h2>
            <div className="car__container">
                <div onClick={() => changeModal1(!stateModal1)} className="car__container--items1">
                    <div className="car__container--title1">
                        <h1 className="car__container--h1p">Choque Frontal</h1>
                    </div>
                    <div className="car__container--parte1">
                        <div className="car__container--contColor">
                            <div className="car__container--color"></div>
                        </div>
                        <a href="/">
                            <img className="car__container--img" src={car1} alt="frontal" />
                        </a>
                    </div>
                </div>
                <div onClick={() => changeModal2(!stateModal2)} className="car__container--items1">
                    <div className="car__container--title2">
                        <h1 className="car__container--h1s">Choque central</h1>
                    </div>
                    <div className="car__container--parte1">
                        <div className="car__container--contColor">
                            <div className="car__container--color"></div>
                        </div>
                        <a href="/">
                            <img className="car__container--img" src={car2} alt="central" />
                        </a>
                    </div>
                </div>
                <div onClick={() => changeModal3(!stateModal3)} className="car__container--items1">
                    <div className="car__container--title3">
                        <h1 className="car__container--h1t">Choque trasera</h1>
                    </div>
                    <div className="car__container--parte1">
                        <div className="car__container--contColor">
                            <div className="car__container--color"></div>
                        </div>
                        <a href="/">
                            <img className="car__container--img" src={car3} alt="trasera" />
                        </a>
                    </div>
                </div>
            </div>
            <Modal 
                state={stateModal1}
                changeState={changeModal1}
                title="Choque Frontal"
            >
                <Front />
            </Modal>
            <Modal 
                state={stateModal2}
                changeState={changeModal2}
                title="Choque Central"
            >
                <Center />
            </Modal>
            <Modal 
                state={stateModal3}
                changeState={changeModal3}
                title="Choque Trasera"
            >
                <Back />
            </Modal>
        </section>
    )
}