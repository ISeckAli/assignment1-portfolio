import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="logo-link">
          <img
            src={logo}
            alt="Ivan's Portfolio logo"
            className="site-logo"
          />
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar