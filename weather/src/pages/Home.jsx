import React, { useState } from 'react';
import './Home.css'; // Refer to the CSS section
import { toast } from 'react-toastify';

function Home() {
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [cityName, setCityName] = useState('');
  const[selectCityName,setSelectCityName] = useState("")
  const [status, setStatus] = useState({
    row1: false,
    row2: false,
    row3: false,
    row4: false
  });

  const capitalizeCityName = (name) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const submitHandler = async () => {
    if (cityName === '') {
      toast.error('Enter City Name');
      return;
    }
    // Mock API request
    console.log(cityName);
    const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`);
  const result = await response.json();
  console.log(result);
  const weatherData = {
    city : cityName,
    description : result.description,
    temperature : result.temp_in_celsius,
    pressure : result.pressure_in_hPa,
    dataAge  : result.humidity_in_percent
  };

    setWeatherDetails((prevDetails) => [...prevDetails, weatherData]);
    setCityName('');
  };

  const getWeatherHandler = async()=>{
    if (selectCityName=== '') {
        toast.error('Select City Name');
        return;
      }
      console.log(selectCityName);
    const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${selectCityName}`);
  const result = await response.json();
  console.log(result);
  const weatherData = {
    city : selectCityName,
    description : result.description,
    temperature : result.temp_in_celsius,
    pressure : result.pressure_in_hPa,
    dataAge  : result.humidity_in_percent
  };

    setWeatherDetails((prevDetails) => [...prevDetails, weatherData]);
    setSelectCityName("")
    // setCityName('');
  };
  



  const deleteHandler = (index) => {
    const remainingData = weatherDetails.filter((_, idx) => idx !== index);
    setWeatherDetails(remainingData);
    toast.success("City Delete Successfully!!!")
  };

  const selectCityHandler = (city, row) => {
    setSelectCityName(city);
    setStatus((prev) => ({
      ...prev,
      [row]: true
    }));

  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather App</h1>
      </header>

      <div className="app-body">
        <aside className="app-sidebar">
          <button className="get-weather-btn" onClick={getWeatherHandler}>Get Weather</button>
          <table className="city-list">
            <tbody>
              <tr>
                <th>City</th>
              </tr>
              <tr>
                <td
                  className={status.row1 ? 'city-selected' : ''}
                  onClick={()=>{
                    selectCityHandler('London', 'row1');
                    toast.success("Click On Get Weather !!!")
                  }}
                
                >
                  London
                </td>
              </tr>
              <tr>
                <td
                  className={status.row2 ? 'city-selected' : ''}
                  onClick={()=>{
                    selectCityHandler('New York', 'row2');
                    toast.success("Click On Get Weather !!!")
                  }}
            
                >
                  New York
                </td>
              </tr>
              <tr>
                <td
                  className={status.row3 ? 'city-selected' : ''}
                  onClick={()=>{
                    selectCityHandler('Los Angeles', 'row3');
                    toast.success("Click On Get Weather !!!")
                  }}
                >
                  Los Angeles
                </td>
              </tr>
              <tr>
                <td
                  className={status.row4 ? 'city-selected' : ''}
                  onClick={()=>{
                    selectCityHandler('Las Vegas', 'row4');
                    toast.success("Click On Get Weather !!!")
                  }}
                
                >
                  Las Vegas
                </td>
              </tr>
            </tbody>
          </table>
        </aside>

        <main className="app-main">
          <div className="search-section">
            <input
              type="text"
              placeholder="City Name"
              value={cityName}
              onChange={(e) => setCityName(capitalizeCityName(e.target.value))}
            />
            <button onClick={submitHandler}>Search</button>
          </div>

          <table className="weather-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Description</th>
                <th>Temperature (°C)</th>
                <th>Pressure (hPa)</th>
                <th>Data age (hrs)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {weatherDetails.length > 0 ? (
                weatherDetails.map((item, index) => (
                  <tr key={index}>
                    <td>{item.city}</td>
                    <td>{item.description}</td>
                    <td>{item.temperature}</td>
                    <td>{item.pressure}</td>
                    <td>{item.dataAge}</td>
                    <td>
                      <button onClick={() => deleteHandler(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>
                    No data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Home;
