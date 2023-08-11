import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 fixed-top">
      <NavLink className="navbar-brand" to="/home">Vishal Enterprise</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link " to="/home">Home</NavLink>
          <NavLink className="nav-item nav-link" to="/challan">Challan</NavLink>
        </div>
      </div>
      <form className="form-inline upper">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    </div>
  )
}

export default Navbar
