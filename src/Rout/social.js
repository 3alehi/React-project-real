import React from 'react'
import "./social.css"
import {BsInstagram,BsGithub,BsTelegram,BsLinkedin} from "react-icons/bs"
export default function social() {
  return (
    <div className='social'>
        <BsInstagram></BsInstagram>
        <BsGithub></BsGithub>
        <BsTelegram></BsTelegram>
        <BsLinkedin></BsLinkedin>
    </div>
  )
}
