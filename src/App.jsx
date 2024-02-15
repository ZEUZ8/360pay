import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CompanyDetailsPage from './pages/CompanyDetailsPage'
import SiteDetailsPage from './pages/SiteDetailsPage'
import EmployeeDetailsPage from './pages/EmployeeDetailsPage'
import UserMasterPage from './pages/UserMasterPage'
import WageDetailsPage from './pages/WageDetailsPage'
import GougeChartPage from './pages/GougeChartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<CompanyDetailsPage/>}></Route>
        <Route path="/siteDetails" element={<SiteDetailsPage/>}></Route>
        <Route path="/employeeDetails" element={<EmployeeDetailsPage/>}></Route>
        <Route path="/userMaster" element={<UserMasterPage/>}></Route>
        <Route path="/wage" element={<WageDetailsPage/>}></Route>
        <Route path="/gougeChart" element={<GougeChartPage/>}></Route>
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
