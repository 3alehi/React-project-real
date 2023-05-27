import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from './Datacourse'
import { Navigate } from 'react-router-dom'
export default function Showcourse() {
    let a = useParams()
    let data = Data
let find = data.find(data=>{
   
    return data.id == a.id

})
console.log(find)
  return (
    <div>
        {find ?(
            <h1>true</h1>
        ):(
<Navigate to={"/course"}></Navigate>
        )}
    </div>
  )
}
