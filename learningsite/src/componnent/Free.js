import React, { useState, useEffect } from 'react';
import './Free.css';
import { fetchData } from './data';

export default function Free() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(res => setData(res));
  }, []);

  console.log(data);

  return (
    <div className="free-container">
      {data.map(item => (
        item.price <= 0 && (
          <React.Fragment key={item.id}>
            <div className="product-box">
              <img src={item.logo} alt="" className="product-image" />
              <h1 className="course-title">{item.name}</h1>
              <h1 className="course-description">{item.des}</h1>
              <button className="btn btn-danger">See Course</button>
            </div>
          </React.Fragment>
        )
      ))}
    </div>
  );
}
