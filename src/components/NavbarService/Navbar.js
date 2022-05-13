import React from 'react';
import {RiSearchLine} from "react-icons/ri";
import '../../components/NavbarService/NavbarService.css';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
export const NavbarService = () => {
  return (
    <nav>
      <Link to="/"><img src={logo} alt='logo'/></Link>
      <div className="NavMenu">
      <ul>
        <li><Link to="/Boarding">Our Services</Link></li>
        <li><Link to="/DogWalking">Become a Pet Sitter</Link></li>
        <li><Link to="/PetTraining">Request Service</Link></li>
      </ul>
      </div>
      <div  className="NavBtn">
        <RiSearchLine size='2.5em'/>
        <div>
        <Link to="/"><button className="SignUp">Sign Up</button></Link>
        <Link to="/Login"><button className="Login">Login</button></Link>
        </div>
      </div>
    </nav>
  )
}
