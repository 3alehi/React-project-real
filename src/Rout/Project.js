import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./git.css"
import { useState } from 'react';
export default function Project() {
    const [github , setgit] = useState([
        {id:1,name:"Shop" , data:"2022", logo:"shop.png"},
        {id:2,name:"library" , data:"2022",logo:"lirary.jpg"},
        {id:3,name:"buy and sell " , data:"2022", logo:"buyandsell.jpg"},
        {id:4,name:"typespeed" , data:"2022",logo:"speed.jpg"},
        {id:5,name:"cloning" , data:"2022",logo:"clone.png"},
        {id:6,name:"chatgpt" , data:"2022",logo:"chat.png"},
    
    
    
    ])
  return (
    <div className='github-project'>

{github.map(data => (
<div id='card'>

<Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.logo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">see in github ...</Button>
      </Card.Body>
    </Card>

</div>    

))}

    </div>
  )
}
