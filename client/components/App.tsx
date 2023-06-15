import Header from './Header'
import Footer from './Footer'
import Locations from './LocationsList'
import AddLocationForm from './AddLocationForm'
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Location } from '../../models/locations'
import { getLocations } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { Outlet, useParams } from 'react-router-dom'
import { get } from 'superagent'




function App() {



 const {data: locationDetailsQuery, isError, isLoading} = useQuery(['locations'], getLocations )

 
console.log(locationDetailsQuery);


if (isError) {
  return <div>There was an error</div>
}
if (isLoading) {
  return <div>Loading</div>
}

  return (
    <div className="body-container">
      <Header />
      <AddLocationForm />
      
     <Locations />
      
      <Footer />
    </div>
  )
}

export default App
