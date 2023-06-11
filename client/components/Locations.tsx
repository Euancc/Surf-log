import { Link } from 'react-router-dom'
import type { Location } from '../models/locations'

interface Props {
  locations: Location[]
}

export default function Locations({locations}: Props) {
  return (
    <section>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <h3>{location.type}</h3>
          </li>
        ))}
      </ul>
  
    </section>
  )
}
