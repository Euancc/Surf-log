import Header from './Header'
import Footer from './Footer'
import Locations from './LocationsList'
import AddLocationForm from './AddLocationForm'
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Location } from '../../models/locations'
import { getLocations } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { get } from 'superagent'

const initialFormData = {
  location: ' '
}



function App() {
  // change to QueryClient

//  const { location } = useParams()


 const {data: locationDetailsQuery, isError, isLoading} = useQuery(['locations'], getLocations )

 
console.log(locationDetailsQuery);


//   const [locations, setLocations] = useState<Location[]>([
//     {id: ' ',  location: ' ' }])
//     const [form, setForm] = useState(initialFormData)


// useEffect(() => {
//   async function fetchTalks() {
//     try{
//       const locations = await getLocations()
//       setLocations(locations)
//     } catch(error) {
//       console.log(error)
//     }
//   }
//   fetchTalks()
// }, [])

if (isError) {
  return <div>There was an error</div>
}
if (isLoading) {
  return <div>Loading</div>
}

  return (
    <div className="body-container">
      <Header />
      <AddLocationForm  />
      <ul>
        <Locations   locations={locationDetailsQuery}  />
      </ul>
      <Footer />
    </div>
  )
}

export default App
