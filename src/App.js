// import logo from './logo.svg';
import './App.css'
import React from 'react'
import avatarshare from "./icons-img/_Avatar share button.png"
import profilepic from "./icons-img/profile__img.png"

function App() {
     return (
          <div className="back">

          <div className="first-page">
  
              <div className="share-avatar">
                  <img className="avatar" src={avatarshare} alt="" />
              </div>
  
              <div className="picxusername">
                  <img id="profile__img" className="image" src={profilepic} alt="" />
              </div>
  
              <p id="twitter" className="twitterusername">Toju_toby</p>
              <p id="slack" className="twitterusername" style={{ display: "none" }}>Toju_tobiliscious</p>
  
          </div>
  
      </div>
     );
}

export default App;

// echo "# HNG-internship-Stage-1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/toju-toby22/HNG-internship-Stage-1.git
// git push -u origin main