import Header from "./Header"
import Footer from "./Footer"
import { useParams } from "react-router-dom"


export default function TablePage() {
  const { location } = useParams()
  console.log(location);
  
 
  return (

  <div className="body-container">
      <Header />
   <div>
   <img className="card" src='/Images/PopulatedCard.png' alt='Populated Card' ></img>
    <img className="card" src='/Images/EmptyCard.png' alt='Empty Card' ></img>
   </div>
      <Footer />
    </div>
  )
}
