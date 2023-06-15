import { Link } from 'react-router-dom'
import type { Location } from '../../models/locations'
import LocationsListItem from './LocationsListItem'
import AddLocationForm from './AddLocationForm'
import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../apis/apiClient'



export default function Locations() {
  const {data: locations, isError, isLoading} = useQuery(['locations'], getLocations)
  console.log('locations', locations)


  if (isError) {
    return <div>There was an error</div>
  }
  if (isLoading) {
    return <div>Loading</div>
  }
  // [ { id: 1, location: 'test' }]
  return (
    <section>
      <ul>
        
        {locations.map((locations) => (
          <LocationsListItem key={locations.id} id={locations.id} locationName={locations.location} />
          
        ))}
      </ul>
  
    </section>
  )
}
