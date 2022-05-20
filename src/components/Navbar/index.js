import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";
import './Navbar.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    var loginButton;
    if (user) {
        loginButton = <><NavBtnLink to="/" className='btn' id='signup'>{name}</NavBtnLink>
        <NavBtnLink to="/Login" className='btn' style={{marginLeft: '10px', width: 'auto'}} onClick={logout}>Log out</NavBtnLink>; </>
    } else {
        loginButton = <><NavBtnLink to="/Register" className='btn' id='signup'>Sign Up</NavBtnLink>
        <NavBtnLink to="/Login" className='btn' style={{marginLeft: '10px'}}>Login</NavBtnLink>; </>
    }

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
                {loginButton}
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar
