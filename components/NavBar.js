import React from 'react';
import sollogo from '../public/images/solanalogo.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Solpaper</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Wallpapers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">🔥Hot</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Giphy</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar