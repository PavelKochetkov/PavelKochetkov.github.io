import React from 'react'
import '../css/resume.css'

export const Quests = (props) => {
    return(
        <div className='aboutme'>
            <h3 style={{marginLeft:'10px'}}>{props.quest.title}</h3>
            <p style={{marginLeft:'10px'}}>{props.quest.job}</p>
            <div className='work'> {props.quest.workExpTitle}
                <hr/>
                    <span className='workinfo'>{props.quest.workExp}</span>
                <hr/>
            </div>
            <div className='education'> {props.quest.educTitle}
                <hr/>
                    <span className='educationinfo'>
                        <table className='table'>
                            <tr>
                                <td><ul><li>{props.quest.year}</li></ul></td>
                                <td>{props.quest.titleAcademy}
                                    <small>
                                        <i>
                                            <p>{props.quest.titleSpecOne}</p>
                                        </i>
                                    </small> 
                                </td>       
                            </tr>
                            <tr>
                                <td><ul><li>{props.quest.year}</li></ul></td>
                                <td>{props.quest.titleAcademy}
                                    <small>
                                        <i>
                                            <p>{props.quest.titleSpecTwo}</p>
                                        </i>
                                    </small> 
                                </td>       
                            </tr>                                     
                        </table>    
                    </span>    
                <hr/> 
            </div>
            <div className='courses'> {props.quest.titleCourses}
                <hr/>
                    <span className='coursesinfo'>
                        <table className='table'>
                            <tr>
                                <td><ul><li>{props.quest.yearCourses}</li></ul></td>
                                <td>{props.quest.titleStepik} 
                                    <small>
                                        <i>
                                            <p>{props.quest.stCourses}</p>
                                        </i>
                                    </small> 
                                </td>       
                            </tr>
                            <tr>
                                <td><ul><li>{props.quest.yearCourses}</li></ul></td>
                                <td>{props.quest.titleUdemy} 
                                    <small>
                                        <i>
                                            <p>{props.quest.udCoursesOne}</p>
                                        </i>
                                    </small> 
                                </td>       
                            </tr>
                            <tr>
                                <td><ul><li>{props.quest.yearCourses}</li></ul></td>
                                <td>{props.quest.titleUdemy} 
                                    <small>
                                        <i>
                                            <p>{props.quest.udCoursesTwo}</p>
                                        </i>
                                    </small> 
                                </td>       
                            </tr> 
                        </table>    
                    </span>    
                <hr/> 
            </div>
        </div>
    )
}