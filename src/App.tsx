import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './pages/DashBoard'
import StatsPage from './pages/StatsPage'
import CoinDetails from './pages/CoinDetailsPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/coin" element={<CoinDetails coin={2} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
