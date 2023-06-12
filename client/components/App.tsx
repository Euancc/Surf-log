import Header from './Header'
import Footer from './Footer'
import Locations from './Locations'
import AddLocationForm from './AddLocationForm'
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Location, LocationData } from '../../models/locations'
import request from 'superagent'
import { getLocations } from '../apis/apiClient'

const initialFormData = {
  location: ' '
}


function App() {
  const [locations, setLocations] = useState<Location[]>([
    {id: ' ',  type: ' ' }])
    const [form, setForm] = useState(initialFormData)


useEffect(() => {
  async function fetchTalks() {
    try{
      const locations = await getLocations()
      setLocations(locations)
    } catch(error) {
      console.log(error)
    }
  }
  fetchTalks()
}, [])

function handleChange(event: ChangeEvent<HTMLInputElement>) {
  const { name, value } = event.target
  const newForm = {...form, [name]: value}
  setForm(newForm)
}





function hanleAddLocation(location: LocationData) {
  const id = uuid()
  const newLocation = { ...location, id} 
  setLocations([...locations, newLocation])
}

  return (
    <div className="body-container">
      <Header />
      <AddLocationForm  onAddLocation={hanleAddLocation} />
      <ul>
        <Locations  locations={locations}   />
      </ul>
      <Footer />
    </div>
  )
}

export default App
