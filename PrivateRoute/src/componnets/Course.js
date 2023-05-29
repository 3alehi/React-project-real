import React from 'react'
import { Data } from './Data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { islogin } from './Utils';
import { Link } from 'react-router-dom';
import "./course.css"
export default function Course() {
    let login = islogin("Slavik")
  return (
    <div className='box'>

  {Data.map(data =>(

<div className='cardrr'>

    <Card  key={data.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.logo} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
            click to see more
          
        </Card.Text>
        {
        login ?(
            <Button variant="primary"><Link className='link' to={"/seecourse/"+data.id}>see more</Link></Button>

        ):(
            <Button variant="primary"><Link  className='link' to={"/login"}> please login</Link> </Button>
            
            )}
      </Card.Body>
    </Card>
            </div>
  ))}





    </div>
  )
}
