import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import "./Todo.css"
import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super()
        this.state ={
            value:"",
            todolist : []
        }
        this.setvalue = this.setvalue.bind(this)
        this.settodo = this.settodo.bind(this)
        this.deletetodo = this.deletetodo.bind(this)
    }
    deletetodo(todo){
    let newtodo = this.state.todolist
   let findindex =  newtodo.findIndex(todo1 =>{
    return todo1 == todo
   })
   newtodo.splice(findindex,1)

   this.setState({
    todolist:newtodo
   })




    }
    setvalue(e){
        this.setState({
        value: e.nativeEvent.target.value
        })
    }
    settodo(){
        this.setState(prevvalue =>{
            return{
                todolist: [...prevvalue.todolist , this.state.value],
                value:""
            }
        })
       

    }

    render() {
        
        return (
            <div>
                <div>
                    <div className='input'>

                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">add Todo in text filed</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                value={this.state.value}
                                onChange={this.setvalue}
                            />
                            <Button variant='primary' onClick={this.settodo}> add</Button>
                        </InputGroup>

                    </div>




                </div>


                {this.state.todolist.map(todo=>(

                    < div className='cards'>
                        <div className=''>

  <center>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Todo List</Card.Title>
        <Card.Text>
            {todo}
         
        </Card.Text>
        <Button className='btn' variant='success'>True</Button>
        <Button className='btn' onClick={()=>{this.deletetodo(todo)}} variant='danger'>Flase</Button>
        
     
      </Card.Body>
    </Card>
  </center>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}
