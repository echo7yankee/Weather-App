import React, { Component } from 'react';
import Search from './components/search';
import DescriptionTitles from './components/description-titles';
import Weather from './components/weather';
import './components/Css/style.css';

const API_KEY = '2031bff9ad2722aaea74297e81c0f0ba';

class App extends Component {

  state = {
    temp: null,
    city: null,
    country:null,
    humidity: null,
    description: null,
    error: null
  }
 
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api.json();
 

    if(city && country) {
      console.log(data);
      this.setState({
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temp: null,
        city: null,
        country:null,
        humidity: null,
        description: null,
        error: 'Please enter the country and the city'
      })
    }
  }


  render() {
    return (
      <div className="wrapper">
        <DescriptionTitles />
        <Search value={this.getWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
         />
      </div>
    );
  }
}

export default App;