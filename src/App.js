import { useEffect, useState } from 'react'
import restCountries from './apis/restCountries'
import CountryDetails from './components/CountryDetails'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(
    () =>
      restCountries.get('/all').then(response => setCountries(response.data)),
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

  const numberOfFilteredCoutries = filtered.length
  const renderFiltered = query ? (
    numberOfFilteredCoutries ? (
      numberOfFilteredCoutries === 1 ? (
        <CountryDetails {...filtered[0]} />
      ) : numberOfFilteredCoutries <= 10 ? (
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
