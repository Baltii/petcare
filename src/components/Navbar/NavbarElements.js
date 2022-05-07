import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: transparent;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 1rem calc((100vw - 1100px) / 2);
    z-index: 10px;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.2rem;
    height: 100%;
    cursor: pointer;
    margin-right: 20px;

    &.active {
        color: #fff;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 20px;
        right: 0;
        transform: transplate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #256ce1;
    padding: 6px 15px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 80px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #1464e6;
    }
`