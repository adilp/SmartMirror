const config = {
  styles: {
    fontFamily: 'Sawasdee',
    fontWeight: 500,
    textScale: '0.8em', // relative font-size of text. 1em ~= 16px
    paddingTop: '5%', // space from the top edge
    paddingLeft: '7%', // space from the left edge
    paddingRight: '6%', // space from the right edge
    paddingBottom: '0%', // space from the bottom edge
  },

  YAHOO_WOEID: '897819',
  SMHI_COORD: {
    longitude: '13',
    latitude: '55.6',
  },
  forecastLabelName: 'Birmingham',
  // svtNewsUrl:
  //   'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=22be964d1de0442384d56d791c039e53',
  weatherAPI: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/346630?apikey=LrXGcUQ5nBJAwODJeuSVvuU39cdpAvKu',
  // currentWeatherAPI: 'http://dataservice.accuweather.com/currentconditions/v1/346630?apikey=LrXGcUQ5nBJAwODJeuSVvuU39cdpAvKu' ,
  currentWeatherAPI: 'http://5b806d9597d8e500144f2d35.mockapi.io/weather',
  forecastAPI: 'http://5b806d9597d8e500144f2d35.mockapi.io/forecast',

  serverBaseURL:
    process.env.NODE_ENV === 'production' ? 'http://localhost:3001' : 'http://localhost:3000',
  wsServerBaseURL: process.env.NODE_ENV === 'production' ? 'localhost:3001/' : 'localhost:3001/',

  language: 'en-US', // swedish by default

  lights: {
    Bedroom: { autoOff: false },
    'Dining Table': { autoOff: false },
    Closet: { autoOff: false },
  },

  gpioPins: {
    button: 12,
    pirSensor: 18,
  },

  journeyStations: {
    from: 'Lund C',
    to: 'Malmö C',
  },

  modules: {
    dateTime: true,
    wunderlistTasks: false,
    transfer: false,
    weather: true,
    forecast: true,
    news: true,
    tempPirSensor: false,
    googleCloudSpeech: false,
    philipsHue: false,
    temperatureGraph: false,
    articles: false,
  },
};

module.exports = config;
