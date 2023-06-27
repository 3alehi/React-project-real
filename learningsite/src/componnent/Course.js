import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './course.css';
import { fetchData } from './data';

export default function Course() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => setData(res))
      .catch((error) => console.error('Error setting data:', error));
  }, []);

  return (
    <div>
      
      <Container>
        <div className="course-box">
          {data.map((item) => (
            <center key={item.id}>
              <div className="course">
                <img src={item.logo} alt={item.name} />
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                <p>Off: {item.off}</p>
                <button className="btn btn-success">see</button>
              </div>
            </center>
          ))}
        </div>
      </Container>
    </div>
  );
}
