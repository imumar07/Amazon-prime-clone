import React from 'react';
import './css/navBar.css';
//import { Link } from 'react-router-dom';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import 'D:/Desktop/COLLEGE/SOC-III/react/myproject/node_modules/bootstrap/dist/css/bootstrap.css'
import primelogo from './css/prime3.png';
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark  bg-black p-1 pt-2 pl-3 pr-2">
  <a class="navbar-brand p-3" href="/"><img src={primelogo} alt="prime logo" className='prime-logo' /></a>
  <button class="navbar-toggler m-3 " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  <div class="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup" >
    <div className='navbar-nav ml-auto'>
      <a className="nav-link active navbar-ele  text-white m-2" aria-current="page" href="/">Home</a>
      <a className="nav-link active navbar-ele  text-white m-2" aria-current="page" href="/">Trending</a>
      <a className="nav-link active navbar-ele  text-white m-2" aria-current="page" href="/">Comedy</a>
      <a className="nav-link active navbar-ele  text-white m-2" aria-current="page" href="/">Comedy</a>
      <div className="nav-item dropdown  navbar-ele m-2">
        <a className="nav-link active navbar-ele dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </a>
        <ul className="dropdown-menu bg-dark">
          <li><a className="dropdown-item text-white hoverEle" href="#continueWatching">Continue Watching</a></li>
          <li><a className="dropdown-item text-white hoverEle" href="/">Telugu</a></li>
          <li><a className="dropdown-item text-white hoverEle" href="/">Hindi</a></li>
          <li><a className="dropdown-item text-white hoverEle" href="/">English</a></li>
          <li><a className="dropdown-item text-white hoverEle" href="/">Comedy</a></li>
          <li><a className="dropdown-item text-white hoverEle" href="/">Thriller</a></li>
          <li><a className="dropdown-item text-white hoverEle" href="/">Sci-fi</a></li>
          <li><hr className="dropdown-divider" /></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar
