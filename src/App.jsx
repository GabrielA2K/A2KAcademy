import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomePageNew from './pages/HomePageNew'

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/new_look' element={<HomePageNew />} />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App
