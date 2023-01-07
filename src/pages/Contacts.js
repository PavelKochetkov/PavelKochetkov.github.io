import React, { useState, useEffect } from 'react'
import { baseUrl } from '../config'
import {Sendmessage} from '../components/Sendmessage'
import { Loader } from '../components/Loader'
import axios from 'axios'
import '../css/sendmessage.css'

export const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const resContacts = await axios.get(`${baseUrl}contacts.json`)
            setContacts(resContacts.data)
            setLoading(false)
        }
        fetchData()   
    }, [])
   
    return(
        <div className='sendmessage'>
            {loading && <Loader/>}
            {contacts.map(contact => <Sendmessage contact={contact}/>)}
        </div>
    )
      
}