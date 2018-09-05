import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { getCurrentWeather, fileFromInt } from '../lib/smhi';

const styles = {
  container: {},
  weather: {
    color: 'white',
    fontSize: '1.4em',
    margin: 0,
    textAlign: 'right',
  },
  currentWeather: {
    color: 'white',
    fontSize: '8.8em',
    margin: 0,
    textAlign: 'right'
  },
  weatherImg: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
    };
    this.refreshWeather = this.refreshWeather.bind(this);
    this.handleNewWeather = this.handleNewWeather.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.refreshWeather(), 1000 * 60 * 10);
    this.refreshWeather();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  refreshWeather() {
    getCurrentWeather()
      .then(this.handleNewWeather)
      .catch(err => console.log(err));
  }

  handleNewWeather(weather) {
    this.setState({
      weather: weather,
    });
  }

  render() {
    console.log("Current weather: " + this.state.weather.temp);
    let weatherSymbol;
    if (this.state.weather.weatherSymbol) {
      weatherSymbol = (
        <img
          style={styles.weatherImg}
          role="presentation"
          src={require('../../resources/weather-icons/' + fileFromInt(this.state.weather.weatherSymbol))}
        />
      );
    } else {
      weatherSymbol = null;
    }


    return (
      <div hidden={!this.props.visible} style={styles.container}>
        <Row>
          <Col xs={8}>
            <p style={styles.currentWeather}>{this.state.weather.temp} °F</p>
            <p style={styles.weather}>
              {this.props.phrases.feels_like} {this.state.weather.windChill} °C
            </p>
            <p style={styles.weather}>
              {this.props.phrases.wind_speed} {this.state.weather.windVelocity} m/s
            </p>
            
          </Col>
          <Col style={{ textAlign: 'center', paddingLeft: 0 }} xs={4}>
            {weatherSymbol}
          </Col>
        </Row>
      </div>
    );
  }
}
