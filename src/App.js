import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [datas, setDatas]=useState({})
  const [inputCity, setInputCity]=useState()

  const APIkey='b0922a2c4491a54ee929d74f7ed3e1b4'
const weatherApi=(cityname)=>{
  const apiurl="https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + APIkey
axios.get(apiurl).then((res)=>{
 setDatas(res.data)
}).catch((err)=>{
  console.log("err", err)
})
}

const handleInput=(e)=>{
  setInputCity(e.target.value)
}
const handleSearch=()=>{
  weatherApi(inputCity)
}

console.log(datas)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary text-center">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Weather app</span>
  </div>
</nav>
   <h1 className='text-center text-white bg-success mt-2 p-4'>Enter The City Name</h1>
<div className="mb-3 p-4">
  <div className="mb-3 form-check">
    <input type="text"  className="form-control" onChange={handleInput} id="exampleInputEmail1"/>
  <button onClick={handleSearch} className="btn btn-primary mt-2">search</button>
  </div>
</div>

{/* ===============data===== */}
{Object.keys(datas).length>0 &&

<div className="card p-4 bg-success text-white">
  <h2>{datas?.name}</h2>
  <h3><span> Wind {datas?.wind?.speed}km/h <span className="dot">•</span> Humidity {datas?.main?.humidity}%</span></h3>
  <h1>{((datas?.main?.temp)-273.15).toFixed(2)}°C</h1>
  
  <table>
    <tbody><tr>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
        <td>30°</td>
        <td>34°</td>
        <td>36°</td>
        <td>34°</td>
        <td>37°</td>
      </tr>
      
    </tbody></table>
</div>




}
</div>
  );
}

export default App;
