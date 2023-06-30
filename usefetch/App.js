import React from 'react'
import { useState,useEffect } from 'react'
import Usefetch from './Usefetch'
export default function App() {

const [post,pending,err] =Usefetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
      {post&&(
        post.map(data=>(
          <div key={data.id}>
           <span>{data.id}</span> - {data.body}
            <hr />
          </div>
        ))
      )}
      {pending&&(
        <h1>Watting...</h1>
      )}
      {err&&(
        <h1>{err}</h1>
      )}
    </div>
  )
}
