import Clock from "./Clock";
import Card from './Cards.js'
import React, { useState } from "react";

const api = {
  key: "af103c190cd36ff3f3fb1e0c135a2ee1",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
  const [fade1, setFade1] = useState(false);
  const [fade2, setFade2] = useState(false);
  const [fade3, setFade3] = useState(false);
  const [fade4, setFade4] = useState(false);
  const [fade5, setFade5] = useState(false);

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [weather2, setWeather2] = useState({});

  const search = evt => {
    //if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        // setQuery('');
        console.log(result);
        if (result.cod === 200) {
          fetch(`${api.base}onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&units=imperial&appid=${api.key}`)
            .then(res2 => res2.json())
            .then(result2 => {
              console.log(result2)
              setWeather2(result2);
              setQuery('');
            })
        }
      });
    //}
  }

  const dateBuilder = (d) => {
    // let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];

    // let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    return `${date} ${month} ${year}`


  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <div className={(typeof weather.main != "undefined") ?
      (weather.weather[0].main === "Clouds" ? 'App clouds' :
        (weather.weather[0].main === "Clear" ? 'App clear' :
          (weather.weather[0].main === "Rain" ? 'App rain' :
            (weather.weather[0].main === "Snow" ? 'App snow' :
              (weather.weather[0].main === "Thunderstorm" ? 'App thunderstorm' :
                (weather.weather[0].main === "Fog" ? 'App fog' : 'App'))))))
      : 'App'}>
      <main>
        <div className="current">
          <Clock format={'hh-mm'} />
          <div className="date">
            <center>
              {dateBuilder(new Date())}
            </center>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div className="input-group">
            <input type="search"
              className="form-control"
              placeholder="Search"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={(evt) => { if (evt.key === "Enter") { search() } }}
              aria-label="Search"
              aria-describedby="search-addon" />
            <button type="button" className="btn" onClick={search}>Search</button>
          </div>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className='current'>
              <div className='location'>
                <center>
                  {weather.name}, {weather.sys.country}
                </center>
              </div>
              <div className='current-temp'>
                <center>{Math.round(weather.main.temp)}&#176;F</center>
              </div>
              <div className='current-description'>
                <center>{toTitleCase(weather.weather[0].description)}</center>
                <div className='icon'>
                  <center><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} /></center>
                </div>
              </div>
              <center>
                <div className="current-box">
                  <div id="conditions-info">Current Conditions</div>
                  <div className="current-info">
                    <div className="feels">
                      <span id="current-conditions">
                        {Math.round(weather.main.feels_like)}&#176;F
                      </span>
                      <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                      <span id="current-conditions">
                        {Math.round(weather.main.humidity)}%
                      </span>
                      <p>Humidity</p>
                    </div>
                    <div className="wind">
                      <span id="current-conditions">
                        {Math.round(weather.wind.speed)} mph
                      </span>
                      <p>Wind</p>
                    </div>
                  </div>
                </div>
              </center>
              <div>
              </div>
            </div>
            <div id="conditions-info">
              <center><span id="xl-font">5 Day Forecast</span></center>
            </div>
            
          </div>
        ) : ('')}
      </main>
      {(typeof weather.main != "undefined") ? (
        <Card cardOneState={() => setFade1(!fade1)} cardTwoState={() => setFade2(!fade2)} cardThreeState={() => setFade3(!fade3)} cardFourState={() => setFade4(!fade4)} cardFiveState={() => setFade5(!fade5)} fade1={fade1} fade2={fade2} fade3={fade3} fade4={fade4} fade5={fade5} weather={weather} weather2={weather2} />
      ) : ('')}

    </div>

  );

}


export default App;

