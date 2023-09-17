import React, { useState } from 'react'
import data from './data'
import "./App.css"
export default function App() {
  const [dataa, setdata] = useState(data)
  const [selectcategory, setcategory] = useState(null)
  const [filtereddata, setfiltereddata] = useState([])
  const filter = dataa.filter(item => selectcategory === 'All' || item.category === selectcategory);
  let gategory = [...new Set(dataa.map(category => category.category))]
  gategory.unshift("All")
  console.log(filter)
  return (
    <div>
      <div className='div-btn '>
        {gategory.map(data => (
          <button className={selectcategory === data ? "btn active" : "btn"} onClick={() => {
            setcategory(data)
          }} >{data}</button>
        ))}
      </div>
      <div className="container">

        <div className="showCategory">

          {filter.map(data => (

            <React.Fragment key={data.id}>
              <div className='item'>

                <img src={data.img} alt="" />
                <h4>{data.title}</h4>
                <h5>{data.desc}</h5>
                <h3>${data.price}</h3>
              </div>

            </React.Fragment>

          ))}


        </div>
      </div>

    </div>
  )
}
