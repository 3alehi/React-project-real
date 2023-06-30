import React from 'react'
import { useState,useEffect } from 'react'
export default function Usefetch(url) {

    const [data,setdata] = useState(null)
    const [ispending,sertpending] = useState(true)
    const [error,seterror] = useState(null)
    useEffect(()=>{
setTimeout(() => {
    fetch(url)
    .then(res =>{
      return res.json()
    })
    .then(res=>{
      setdata(res)
      sertpending(false)
      seterror(null)
    
    })
    .catch(err=>{
      seterror(err)
    })
}, 5000);
    },[])
    return [data,ispending,error]
}
