import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Course from './componnent/Course';
import Navbars from './componnent/Navbars'
import { fetchData } from './componnent/data';
export default function Showcourse() {
    const [filterd , setfiltered] = useState("")
    const [data, setData] = useState(null);
    const [searchBox, setSearchBox] = useState('');
  
    useEffect(() => {
      fetchData()
        .then(res => {
          setData(res);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
  return (
    <div>
<div className="body">
        <div className="search">
          <center>
            <h4 className="w">
              با اکادمی اسلاویک برنامه نویسی رو با خیال راحت یادبگیر
            </h4>
            <AiOutlineSearch className="icon-s" />
            <input
              className="searchBox"
              onChange={(e)=>{

                setSearchBox(e.target.value)
                 setfiltered( data.filter(item =>{
                  if(item.name.includes(searchBox)){
                    return item
                  }
                  return false
                })
                 )
         
  
              }
              
              }
              value={searchBox}
              type="text"
              placeholder="هر دوره ای که میخوای رو سرچ کن"
             
            />
            <div className='searched-value'>
              {filterd?(
                filterd.map(item =>(
                  < div key={item.id} className='searched-item'>
                  <h3>{item.name}</h3>
                  </div>


                ))
                
              ):(
                 false
              )

              }
            {useEffect(() => {
              <>
              <h1>this is course</h1>
              </>
              console.log(filterd)



  }, [searchBox])
}
              
            </div>
          </center>
        </div>
      </div>

      <Course />

    </div>
  )
}
