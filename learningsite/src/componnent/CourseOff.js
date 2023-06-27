import React, { useEffect, useState } from 'react';
import { fetchData } from './data';
import './off.css';

export default function CourseOff() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(res => setData(res))
      .catch(error => console.error('Error setting data:', error));
  }, []);

  return (
    <div className="off">
      {data.map(item => (
        item.off <= 0 && item.price > 0 && (
          <div className="off-box">
            
          <div className='off-box-content' key={item.id}>
            <img src={item.logo} alt="" />
            <h1>{item.name}</h1>
            <h1>{item.price - (item.price * 0.15)}</h1>
            <h1>{item.des}</h1>
            <button className='btn btn-success'>see course</button>
          </div>
          </div>
        )
      ))}
    </div>
  );
}
