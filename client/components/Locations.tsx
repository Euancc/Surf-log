import { Link } from 'react-router-dom'

interface Props {
  locations: string[]
}

export default function Locations({locations}: Props) {
  return (
    <section>
      <ul>
        {locations.map((location, i) => (
          <li key={i}>
            <h3>{location}</h3>
          </li>
        ))}
      </ul>
  
    </section>
  )
}
