import React from 'react'
import '../css/resume.css'

export const Hobby = (props) => {
    return(
        <div className='sideMenu'>            
                <div className='contact'>                
                    <div className='title'>{props.hobby.title}</div>                    
                        <ul key={props.hobby.id}>
                            <li>{props.hobby.skis}</li>
                            <li>{props.hobby.computers}</li>
                            <li>{props.hobby.guitar}</li>
                        </ul>
                </div>
        </div>
    )
}