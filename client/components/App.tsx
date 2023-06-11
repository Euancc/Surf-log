import Header from './Header'
import Footer from './Footer'
import Locations from './Locations'
import AddLocationForm from './AddLocationForm'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Location, LocationData } from '../models/locations'



function App() {
  const [locations, setLocations] = useState<Location[]>([
    {id: 'magnetBayId', type: 'location' }])

function hanleAddLocation(location: LocationData) {
  const id = uuid()
  const newLocation = { ...location, id} 
  setLocations([...locations, newLocation])
}

  return (
    <div className="body-container">
      <Header />
      <AddLocationForm onAddLocation={hanleAddLocation} />
      <ul>
        <Locations locations={locations}   />
      </ul>
      <Footer />
    </div>
  )
}

export default App
