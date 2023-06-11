import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css";
import Table from 'react-bootstrap/Table';
import { FaSearchDollar } from "react-icons/fa";

function App() {
  const [start, setStart] = useState(0);
  const [data, setData] = useState([]);
  
  async function fetchData() {
    let Api = 'https://api.coinlore.com/api/tickers/?start=' + start + '&limit=10';
    const res = await fetch(Api);
    const fetchedData = await res.json();
    setData(fetchedData.data);
  }

  useEffect(() => {
    fetchData();
  }, [start]);

  const getChangeColor = (percentChange) => {
    return percentChange < 0 ? "red" : "green";
  };

  return (
    <div>
      <div className="menu">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                style={{ borderRadius: "50px" }}
                alt=""
                src="slavik.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Tracker crypto
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div className="search">
        <center>
          <input className='searchinput' type="text" placeholder='search coins, Token' />
          <i className='icons'><FaSearchDollar /></i>
        </center>
      </div>
      <div className="showprice">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Rnk</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Percent Change 1h</th>
              <th>Percent Change 24h</th>
              <th>Percent Change 7day</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.rank}</td>
                <td>{item.symbol}</td>
                <td>{item.price_usd}</td>
                <td style={{ color: getChangeColor(item.percent_change_1h) }}>{item.percent_change_1h}</td>
                <td style={{ color: getChangeColor(item.percent_change_24h) }}>{item.percent_change_24h}</td>
                <td style={{ color: getChangeColor(item.percent_change_7d) }}>{item.percent_change_7d}</td>
             
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button onClick={() => setStart(start + 10)}>Next 10+</button>
    </div>
  );
}

export default App;
