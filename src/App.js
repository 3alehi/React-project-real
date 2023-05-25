import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './Rout/Menu'
import About from './Rout/About'
import Social from './Rout/social'
import Project from './Rout/Project'
import Todo from './Rout/Todo'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
              <Menu></Menu>
        <About></About>
        <Social></Social>
        </>

      }></Route>
      <Route path='projects' element={
        <>
            <Menu></Menu>
        <Project></Project>
        </>
    
      }></Route>
      <Route path='learning' element={
        <Menu></Menu>
      }></Route>
      <Route path='todolisit' element={
        <>
                <Menu></Menu>
                <Todo></Todo>

        </>
      }>

      </Route>
      <Route path='*' element={<h1 style={{textAlign:"center"}}>Error page not fonud</h1>}></Route>
    </Routes>

  )
}
