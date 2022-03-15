const CountryDetails = ({ country }) => (
  <>
    <h2>{country[0].name.common}</h2>
    <div>capital {country[0].capital[0]}</div>
    <div>capital {country[0].area}</div>
    <h3>languages: </h3>
    <ul>
      {Object.values(country[0].languages).map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>
    <img
      src={country[0].flags.svg}
      alt={`${country[0].name.common} flag`}
      width="300"
      height="200"
    />
  </>
);

export default CountryDetails;
