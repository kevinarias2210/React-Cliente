import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardImg} from 'react-bootstrap';
import './tarjetas.css';

const Tarjetas = (props) => {
    let {imgSrc} = props.data;
    return(
        <Card className="card">
            <div className="card__container">
                <CardImg src={imgSrc}/>
            </div>
        </Card>
    )
}

export default Tarjetas;