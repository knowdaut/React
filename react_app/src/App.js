import Clock from "./Clock";
import Card from './Cards.js'
import React, { useState} from "react";

const api = {
  key: "af103c190cd36ff3f3fb1e0c135a2ee1",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [weather2, setWeather2] = useState({});
  
  const search = evt => {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
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
  }

  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];

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
    // <div className={(typeof weather.main != "undefined") ?
    //   (weather.weather[0].main === "Clouds" ? 'App clouds' :
    //     (weather.weather[0].main === "Clear" ? 'App clear' :
    //       (weather.weather[0].main === "Rain" ? 'App rain' :
    //         (weather.weather[0].main === "Snow" ? 'App snow' :
    //           (weather.weather[0].main === "Thunderstorm" ? 'App thunderstorm' :
    //             (weather.weather[0].main === "Fog" ? 'App fog' : 'App'))))))
    //   : 'App'}>
    <div className={(typeof weather.main != "undefined") ? `App ${weather.weather[0].main}` : 'App'}>
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
        ) : null}
      </main>
      {(typeof weather.main != "undefined") ? (
        <Card weather={weather} weather2={weather2} />
      ) : null}

    </div>

  );

}


export default App;

