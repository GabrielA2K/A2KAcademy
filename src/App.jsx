import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomePageNew from './pages/HomePageNew'

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePageNew />} />
            <Route path='/old_look' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App
