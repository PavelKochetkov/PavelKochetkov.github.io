import React, {useState, useEffect} from 'react'
import '../css/resume.css'
import { baseUrl } from '../config'
import axios from 'axios'
import { Languges } from '../components/Languges'
import {Tech} from '../components/Tech'
import { Qualities } from '../components/Qualities'
import { Hobby } from '../components/Hooby'
import { Quests } from '../components/Quests'
import { Loader } from '../components/Loader'

export const About = () => {
    const [languges, setLanguges] = useState([])
    const [tech, setTech] = useState([])
    const [qualities, setQualities] = useState([])
    const [hobbies, setHobbies] = useState([])
    const [quests, setQuests] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            const resLanguge = await axios.get(`${baseUrl}userLanguges.json`)
            setLanguges(resLanguge.data)
            const resTech = await axios.get(`${baseUrl}tech.json`)
            setTech(resTech.data)
            const resQualities = await axios.get(`${baseUrl}userQualities.json`)
            setQualities(resQualities.data)
            const resHobby = await axios.get(`${baseUrl}userHobby.json`)
            setHobbies(resHobby.data)
            const resQuest = await axios.get(`${baseUrl}questionnaire.json`)
            setQuests(resQuest.data)
        }
        setTimeout(() => {
            fetchData().then(setLoading(true))
        },1000) 
    }, [])
    if (!loading) {
        return <div className='loader'>
                    <Loader/>
                </div>}
        return (
            <React.Fragment>
                <div className='resume container-sm'>
                    {tech.map(skill => <Tech skill={skill}/>)}
                    {languges.map(languge => <Languges languge={languge}/>)}
                    {qualities.map(qualitie => <Qualities qualitie={qualitie}/>)}
                    {hobbies.map(hobby => <Hobby hobby={hobby}/>)}
                </div>
                    {quests.map(quest => <Quests quest={quest}/>)}
            </React.Fragment>
            
        )
}