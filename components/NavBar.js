import React from 'react';
import sollogo from '../public/images/solanalogo.png';

function NavBar() {
  return (
    <nav class="navbar navbar-expand bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Solpaper</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Wallpapers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">🔥Hot</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Giphy</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar