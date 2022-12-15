import React, { useState, useEffect } from 'react'
import { baseUrl } from '../config'
import {Sendmessage} from '../components/Sendmessage'
import {Triangle} from 'react-loader-spinner'
import axios from 'axios'
import '../css/sendmessage.css'

export const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            const resContacts = await axios.get(`${baseUrl}contacts.json`)
            setContacts(resContacts.data)
        }
        setTimeout(() => {
            fetchData().then(setLoading(true))
        },1000) 
    }, [])
    if (!loading) {return <div className='loader'><Triangle color='white'/></div>}
    return(
        <div className='sendmessage'>
            {contacts.map(contact => <Sendmessage contact={contact}/>)}
        </div>
    )
      
}