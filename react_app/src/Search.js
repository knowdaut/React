// import React, { useState } from "react";

// const api = {
//     key: "af103c190cd36ff3f3fb1e0c135a2ee1",
//     base: "https://api.openweathermap.org/data/2.5/"
// }

// const Search = (props) => {
//     console.log(props)
//     const [query, setQuery] = useState('');
//     const [weather, setWeather] = useState({});

//     const search = evt => {
//         if (evt.key === "Enter") {
//             fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
//                 .then(res => res.json())
//                 .then(result => {
//                     setWeather(result);
//                     setQuery('');
//                     console.log(result);
//                 });
//         }
//     }

//     return (
//         <div>
//             <div class="d-flex justify-content-center">
//                 <div className="input-group">
//                     <input type="search"
//                         className="form-control"
//                         placeholder="Search"
//                         onChange={e => setQuery(e.target.value)}
//                         value={query}
//                         onKeyPress={search}
//                         aria-label="Search"
//                         aria-describedby="search-addon" />
//                     <button type="button" className="btn">Search</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Search;