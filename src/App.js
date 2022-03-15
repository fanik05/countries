import { useEffect, useState } from 'react'
import axios from 'axios'
import CountryDetails from './components/CountryDetails'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(
    () =>
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => setCountries(response.data)),
    []
  )

  useEffect(
    () =>
      setFiltered(
        countries.filter(country =>
          country.name.common.match(new RegExp(query, 'i'))
        )
      ),
    [countries, query]
  )

  const renderFiltered = query.length ? (
    filtered.length ? (
      filtered.length === 1 ? (
        <CountryDetails {...filtered[0]} />
      ) : filtered.length <= 10 ? (
        <CountryList countries={filtered} />
      ) : (
        'Too many matches, specify another filter'
      )
    ) : (
      'No such country'
    )
  ) : (
    'Search any country'
  )

  return (
    <>
      <div>
        find countries{' '}
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <div>{renderFiltered}</div>
    </>
  )
}

export default App
