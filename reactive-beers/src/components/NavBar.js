import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function Header() {
  const NavBarStyle = {
    "backgroundColor": "#32C3FF",
    "margin": ""
  }

  const NavBarLogo = {
    "color" : "#ffffff",
    "fontSize": "4rem",
    "margin": "5px"
  }

  return (
    <div style={NavBarStyle}>
      <Link to ="/">
        <FaHome style={NavBarLogo} />
        </Link>
    </div>
      )
    }
