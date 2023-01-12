import React from "react";
import HeadComponent from '../components/Head';
import NavBar from "../components/NavBar";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
  <>
  <NavBar/> 
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 Buildspace Solpaper (wallpaper) Store 😈</p>
          <p className="sub-text">The only wallpaper store that accepts sh*tcoins</p>
        </header>

        <main>
          <img src="https://media.giphy.com/media/iHD88spVFkL7mZakwa/giphy.gif" alt="emoji" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
