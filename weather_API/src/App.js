import React, { useState, useEffect } from 'react';
import "./App.css"

export default function App() {
  const API_KEY = '0839c82d5d496dbb12b10b594acca61c';

  const [inputValue, setInputValue] = useState("");
  const [data, setdata] = useState("")

  useEffect(() => {
    if (inputValue) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
          setdata(res)


        })
        .catch(err => {
          console.log(err)
        })

    }
  }, [inputValue]);

  return (
    <div>
      <center>
        <div className="input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div>
{data.cod == 404 &&(
  <h1>{data.message}</h1>
)}
{data.cod == 200&&(
  <>
  <h2>Countray : {data.sys.country}</h2>
<h3>City : {data.name}</h3>
<h3>The highest temperature: {data.coord.lat.toFixed(2)}</h3>
<h4>weather status: {data.weather[0].main}</h4>

{ console.log(data)}
  </>
)}

        </div>

      </center>
    </div>
  );
}
