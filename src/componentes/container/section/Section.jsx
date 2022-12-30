import React from "react";
import './section.css';

export function Section(){
    return(
        <section className="section">
            <div className="section__container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/p0G6Uc-p1QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    )
}