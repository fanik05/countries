import { useEffect, useState } from 'react'
import openWeatherMap from '../apis/openWeatherMap'

const CountryDetails = ({
  name,
  capital,
  area,
  languages,
  flags,
  capitalInfo,
  latlng,
}) => {
  const [capitalWeather, setCapitalWeather] = useState(null)

  useEffect(() => {
    openWeatherMap
      .get('/weather', {
        params: {
          lat: capitalInfo.latlng ? capitalInfo.latlng[0] : latlng[0],
          lon: capitalInfo.latlng ? capitalInfo.latlng[1] : latlng[1],
        },
      })
      .then(response => setCapitalWeather(response.data))
  }, [capitalInfo, latlng])

  return (
    <>
      <h2>{name.common}</h2>
      <div>capital {capital[0]}</div>
      <div>area {area}</div>
      <h4>languages: </h4>
      <ul>
        {Object.values(languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        width="300"
        height="200"
      />
      <h3>Weather in {capital[0]}</h3>
      {capitalWeather && (
        <>
          <div>temperature {capitalWeather.main.temp} Celcius</div>
          <img
            src={`http://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@2x.png`}
            alt={`${capitalWeather.weather[0].description} icon`}
          />
          <div>wind {capitalWeather.wind.speed} m/s</div>
        </>
      )}
    </>
  )
}

export default CountryDetails
