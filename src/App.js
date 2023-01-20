import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/home';
import About from './Pages/about';
import Projects from './Pages/projects';

function App() {
  return (
    <Router>
      <nav id="nav">
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/about">About</Link>
        <Link className="navLink" to="/projects">Projects</Link>
      </nav>
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/about" element = { <About /> } />
        <Route path = "/projects" element = { <Projects /> } />
      </Routes>
    </Router>
  )
}

export default App;
