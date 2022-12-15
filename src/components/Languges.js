import React from 'react'
import '../css/resume.css'

export const Languges = (props) => {
    return(
        <div className='sideMenu'>            
                <div className='contact'>                
                    <div className='title'>{props.languge.title}</div>                    
                        <ul key={props.languge.id}>
                            <li>{props.languge.languges}</li>
                        </ul>
                </div>
        </div>
    )
}