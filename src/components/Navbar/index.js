import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>PetCare</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/Home" activeStyle style={{marginLeft: '50px'}}>
                    Home
                </NavLink>
                <NavLink to="/Features" activeStyle >
                    Features
                </NavLink>
                <NavLink to="/Services" activeStyle >
                    Services
                </NavLink>
                <NavLink to="/About" activeStyle >
                    About
                </NavLink>
                <NavLink to="/Contact" activeStyle >
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Register" className='btn' id='signup'>Sign Up</NavBtnLink>
                <NavBtnLink to="/Login" className='btn' style={{marginLeft: '10px'}}>Login</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar