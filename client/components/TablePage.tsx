import Header from "./Header"
import Footer from "./Footer"
import { useParams } from "react-router-dom"


export default function TablePage() {
  const { location } = useParams()
  console.log(location);
  
 
  return (

  <div className="body-container">
      <Header />
   
      <Footer />
    </div>
  )
}
