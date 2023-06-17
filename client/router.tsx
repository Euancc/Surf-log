import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import TablePage from './components/TablePage'



export const routes = createRoutesFromElements(

  <Route path="/">
      
    <Route path="/tablepage/:location" element={<TablePage />} />
    <Route path="/" element={<App />} />
  
    
  </Route>
)

export const router = createBrowserRouter(routes)