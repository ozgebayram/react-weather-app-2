import axios from "axios";
import React, { useState } from "react";

const Main = () => {
  const [searchText, setSearchText] = useState("ankara");
  const [city,setCity]= useState("")
  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;
  const iconUrl = `https://openweathermap.org/img/wn/icon@2x.png`;

  const getData = async()=>{
    try{
       const {data} = await axios(url) 
       console.log(data);
       setCity(data)
       
    }catch{
      alert("veri görüntülenemedi")
    }
   
  }

  const handleClick =(e)=>{
    e.preventDefault()
    getData()
   ;
  }

  return (
    <section className="main">
      <form>
        <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="Search for a city" autoFocus />
        <button onClick={handleClick} type="submit">SUBMIT</button>
        <span className="msg">error</span>
      </form>
      <div className="container">
        <ul className="cities">{/* use WeatherCard here */}</ul>
      </div>
    </section>
  );
};

export default Main;
