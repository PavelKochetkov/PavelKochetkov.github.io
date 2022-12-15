import React from "react";
import '../css/cardskill.css'

export const Cardskill = (props) => {
    return(
        
        <div className="card m-4 shadow-lg bg-white rounded">
            <img src={props.certificate.img} className="card-img-top" alt={props.certificate.name}/>
            <div className="card-body">
                <h6 className="card-title">{props.certificate.name}</h6>
                    <a href={props.certificate.url} target="_blank" rel = "noreferrer" 
                        className="btn btn-primary">Подробнее...
                    </a>
            </div>
        </div> 
    )
}