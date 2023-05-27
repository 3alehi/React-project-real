import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Data } from './Datacourse';
import { Link } from 'react-router-dom';
import "./course.css"
import { islogin } from '../utils';
export default function Course() {
    let login = islogin("Slavik")


  return (
    <div>


      <div className='box'>
{Data.map(course =>(
  <div className='b' key={course.id}>

    <Card key={course.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.logo} />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          {course.tittle}
        </Card.Text>
        {
          login ?  (
            <Button variant="primary"><Link style={{color:"white" , textDecoration:"none"}} to={"/showcourse/"+ course.id} > show course</Link></Button>

          ):(
            <Button variant="primary" >plase login</Button>

          )
        }
        
      </Card.Body>
    </Card>
            </div>
))}
</div>




</div>
  )
}
