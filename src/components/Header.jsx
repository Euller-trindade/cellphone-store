import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BsFillCartFill} from 'react-icons/bs'
import {FaStoreAlt, FaUserCheck} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #005f4b;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  padding: 20px;
  margin-bottom: 50px;
  div {
    display: flex;
    justify-content: space-around;
    width: 250px;
  }
  a {
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.5s;
    gap: 10px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Header = () => {
  return (
    <HeaderArea>
      <h2>
        <Link to="/">cellphone store</Link>
      </h2>
      <div>
        <Link to="/store"><FaStoreAlt/></Link>
        <Link to="/cart"><BsFillCartFill/></Link>
        <Link to="/profile"><FaUserCheck/></Link>
      </div>
    </HeaderArea>
  );
};

export default Header;
