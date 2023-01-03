import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Cardskill } from '../components/Cardskill'
import { baseUrl } from '../config'
import { Loader } from '../components/Loader'

export const Skill = () => {
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect (() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}certificates.json`)
      setCertificates(response.data)
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
    <div className = "cardskill mt-5">
      {certificates.map(certificate => <Cardskill certificate={certificate}/>)}
    </div>
  )     
}