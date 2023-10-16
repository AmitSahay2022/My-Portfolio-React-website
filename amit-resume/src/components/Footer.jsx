import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  var year=new Date().getFullYear();
  return (
    <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <NavLink to="/" className="nav-link px-2 text-body-secondary">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link px-2 text-body-secondary">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/skills" className="nav-link px-2 text-body-secondary">
          Skills
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link px-2 text-body-secondary">
          Contact
        </NavLink>
      </li>
      
    </ul>
    <p className="text-center text-body-secondary">© {year} AmitSoftware</p>
  </footer>
</div>

  )
}

export default Footer