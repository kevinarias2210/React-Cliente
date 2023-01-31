import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import Tarjetas from "./card/Tarjetas";
import 'swiper/css';
import 'swiper/css/free-mode';
import './aside.css';
//Import de imgs
import img1 from "./img/1.jpeg";
import img2 from './img/2.jpeg';
import img3 from './img/3.jpeg';
import img4 from './img/4.jpeg';
import img5 from './img/5.jpeg';
import img6 from './img/6.jpeg';
import img7 from './img/7.jpeg';
import img8 from './img/8.jpeg';
import img9 from './img/9.jpeg';

export function Aside(){
    return(
        <aside id="asides" className="aside">
            <div className="aside__container">
                <h2 id="asides" className="aside__container--h2">Mi perfil</h2>
                <p className="aside__container--p">Ofrezco servicio de latoneria, reparo todo lo relacionado con colisiones golpes y 
                    abolladuras, también ofrecemos servicio de pintura con los mejores materiales que hay en el mercado, ofrezco 
                    servicio a domicilio para que el cliente no se quede sin carro. Con 30 años de experiencia.</p>
            </div>
            <div className="aside__container2">
                <div className="aside__container2--title">
                    <h2 className="aside__container--h2">Mi trabajo</h2>
                </div>
                <div className="aside__container--photo">
                    <Swiper 
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                        breakpoints={{
                            0:{
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480:{
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768:{
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                            1024:{
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            1280:{
                                slidesPerView: 5,
                                spaceBetween: 30
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img1}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img2}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img3}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img4}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img5}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img6}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img7}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img8}} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Tarjetas data={{imgSrc: img9}} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </aside>
    )
}