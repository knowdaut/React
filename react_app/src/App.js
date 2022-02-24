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

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
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

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 60) ? 'App hot' : 'App cold') : 'App'}>
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
              onKeyPress={search}
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
              <div className='current-icon'>
                <center><i class="fas fa-cloud fa-2x"></i></center>
              </div>
              <div className='current-temp'>
                <center>{Math.round(weather.main.temp)}&#176;F</center>
              </div>
              <center>
                <div className="current-box">
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
              </center>
              <div>

              </div>
            </div>
          </div>
        ) : ('')}

      </main>
      {(typeof weather.main != "undefined") ? (
        <Card cardOneState={() => setFade1(!fade1)} cardTwoState={() => setFade2(!fade2)} cardThreeState={() => setFade3(!fade3)} cardFourState={() => setFade4(!fade4)} cardFiveState={() => setFade5(!fade5)} fade1={fade1} fade2={fade2} fade3={fade3} fade4={fade4} fade5={fade5} weather={weather} />
      ) : ('')}

    </div>
  );
}


export default App;

