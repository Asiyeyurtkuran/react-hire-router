import { useState } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import PersonProfile from "./pages/PersonProfile"
import Dashboard from "./pages/Dashboard"

import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            
            <Link to= "/"  >Dashboard</Link>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path= "/" element={<Dashboard/>} hiredPeople={hiredPeople}></Route>
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>
    </>
  )
}
