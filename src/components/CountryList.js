import CountryListItem from './CountryListItem'

const CountryList = ({ countries }) => {
  const renderCountryList = countries.map(country => (
    <div key={country.ccn3}>
      <CountryListItem country={country} />
    </div>
  ))

  return <div>{renderCountryList}</div>
}

export default CountryList
