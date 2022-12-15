import React from 'react'
import '../css/resume.css'

export const Tech = (props) => {
    return(
        <div className='sideMenu'>            
                <div className='contact'>                
                    <div className='title'>{props.skill.title}</div>                    
                        <ul key={props.skill.id}>
                            <li>{props.skill.html}</li>
                            <li>{props.skill.css}</li>
                            <li>{props.skill.js}</li>
                            <li>{props.skill.react}</li>
                        </ul>
                </div>
        </div>
    )
}