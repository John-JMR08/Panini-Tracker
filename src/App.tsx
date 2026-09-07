import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TeamProvider } from './DataContext';
import TeamGrid from './components/TeamGrid'
import StickerGrid from './components/StickerGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <TeamProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<TeamGrid />} />
            <Route path="/teams/:id" element={<StickerGrid />} />
          </Routes>
        </BrowserRouter>
      </TeamProvider>
    </>
  )
}

export default App
