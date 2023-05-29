import React from 'react'
import { Data } from './Data'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function seecourse() {
    let id = useParams()
    console.log(id.id)
    let data = Data
    let find = data.find(data =>{
        return data.id == id.id
    })
    console.log(find)
  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"."+find.logo} />
      <Card.Body>
        <Card.Title>{find.name}</Card.Title>
        <Card.Text>
          {find.tittle}
        </Card.Text>
        <Button variant="primary">start course</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
