import { useState } from 'react'
import CountryDetails from './CountryDetails'

const CountryListItem = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      {country.name.common}{' '}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'hide' : 'show'}
      </button>
      <div>{showDetails && <CountryDetails {...country} />}</div>
    </>
  )
}

export default CountryListItem
