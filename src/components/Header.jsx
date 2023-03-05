import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      <h1>
        <Link to="/">cellphone store</Link>
      </h1>
      <div>
        <Link to="/store">Loja</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/profile">Meu Perfil</Link>
      </div>
    </HeaderArea>
  );
};

export default Header;
