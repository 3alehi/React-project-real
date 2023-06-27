import React from 'react'
import { useParams } from 'react-router-dom'


export default function Viwecourse() {
  let params = useParams()
  console.log(params.id)
  return (
    <div>Viwecourse</div>
  )
}
