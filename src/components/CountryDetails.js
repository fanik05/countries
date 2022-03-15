const CountryDetails = ({ name, capital, area, languages, flags }) => (
  <>
    <h2>{name.common}</h2>
    <div>capital {capital[0]}</div>
    <div>capital {area}</div>
    <h3>languages: </h3>
    <ul>
      {Object.values(languages).map(language => (
        <li key={language}>{language}</li>
      ))}
    </ul>
    <img src={flags.svg} alt={`${name.common} flag`} width="300" height="200" />
  </>
)

export default CountryDetails
