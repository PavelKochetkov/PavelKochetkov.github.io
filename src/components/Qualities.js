import React from 'react'
import '../css/resume.css'

export const Qualities = (props) => {
    return(
        <div className='sideMenu'>            
                <div className='contact'>                
                    <div className='title'>{props.qualitie.title}</div>                    
                        <ul key={props.qualitie.id}>
                            <li>{props.qualitie.punctuality}</li>
                            <li>{props.qualitie.attentiveness}</li>
                            <li>{props.qualitie.purposefulness}</li>
                            <li>{props.qualitie.responsibility}</li>
                            <li>{props.qualitie.teamwork}</li>
                        </ul>
                </div>
        </div>
    )
}