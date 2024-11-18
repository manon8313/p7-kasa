// Nous importons les composants nécessaires pour pouvoir gérer les routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'


// On configure l'application en elle même (la fonction App)
export default function App() {
  return (
    // On retourne le routeur
    <Router>
      {/* Le routeur contients DES routeS */}
      <Routes>
        {/* On gère chaque route indépendamment */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}