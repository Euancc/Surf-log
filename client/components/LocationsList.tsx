import { Link } from 'react-router-dom'
import type { Location } from '../../models/locations'

interface Props {
  locations: Location[]
}

export default function Locations({locations}: Props) {
  console.log('locations', locations)
  // [ { id: 1, location: 'test' }]
  return (
    <section>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <h3>{location.location}</h3>
          </li>
        ))}
      </ul>
  
    </section>
  )
}
