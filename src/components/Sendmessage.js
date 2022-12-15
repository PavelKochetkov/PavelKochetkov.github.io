import React from "react";
import '../css/sendmessage.css'

export const Sendmessage = (props) => {
    return (
        <React.Fragment>
            <div className="media">
                <a href={props.contact.url}><img src={props.contact.img} alt={props.contact.name}/></a>
                <div className="title_sl">{props.contact.title}</div>
            </div>
        </React.Fragment>
    )
}