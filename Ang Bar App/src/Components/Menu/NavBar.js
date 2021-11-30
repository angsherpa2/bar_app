import './NavBar.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function NavBar() {
  const [icon,setIcon] =useState("none");

  function makeResponsive() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    let y = document.getElementById("icon");
    if(icon === "none") {
      y.innerHTML = "&#10005;"
      setIcon("x")
    }
    else {
      y.innerHTML = "&#9776;"
      setIcon("none")
    }
    let linksResponsive = document.getElementById("linkAlign");
      if (linksResponsive.className === "linkAlign") {
        linksResponsive.className = "responsiveLinkAlign";
      } else {
        linksResponsive.className = "linkAlign";
      }
  }

  return (
    <div className="topnav" id = "myTopnav">
      <div className = "linkAlign" id ="linkAlign">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <div className = "dropdown">
        <Link className = "dropbtn" to='#'>Shop <span className ="triangle" >&#9660;</span> </Link>
        <li className ="dropdown-content">
        <Link to='/shop/online'>Online</Link>
        <Link  to='/shop/offline'>Offline</Link>
        </li>
        </div>
        <Link to='/contact'>Contact</Link>
        <Link to="#" className="icon" id = "icon" onClick={makeResponsive}>&#9776;</Link>
      </div>
    </div>
  );
}

export default NavBar;
