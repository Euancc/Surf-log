import Header from './Header'
import Footer from './Footer'
import Locations from './LocationsList'
import AddLocationForm from './AddLocationForm'
import { getLocations } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'






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
